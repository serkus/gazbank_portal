-module(index).
-compile(export_all).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
%-include_lib("kvs/include/cursors.hrl").

event(init) ->
    ok;
    
event(logout) ->
    n2o:user([]),
    nitro:redirect("/");

event(chat) ->
    chat(nitro:q(message),nitro);

event(#client{data={'$msg',_,_,_,User,Message}}) ->
    HTML = nitro:to_list(Message),
    nitro:wire(#jq{target=message,method=[focus,select]}),
    nitro:insert_top(history, nitro:render(#message{body=[#author{body=User},nitro:jse(HTML)]}));

event(#ftp{sid=Sid,filename=Filename,status={event,stop}}=Data) ->
    Name = hd(lists:reverse(string:tokens(nitro:to_list(Filename),"/"))),
    chat(nitro:render(#link{href=iolist_to_binary(["",Sid,"/",Name]),body=Name}), index);  % ["/app"];
    %Room = nitro:to_list(nitro:q(pass));

event(login) ->
    n2o:user(User),
    User = nitro:to_list(nitro:q(user));

event(Event) ->
    ok.

jse(X) -> X.

chat(Message,F) ->
    %Room = n2o:session(room),
    User = n2o:user(),
    Msg = {'$msg', kvs:seq([], []), [], [], User, F:jse(Message)},
    kvs:append(Msg,{topic}),
    n2o:send({topic}, #client{data = Msg}).