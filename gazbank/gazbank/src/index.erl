-module(index).
-compile(export_all).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
-include_lib("kvs/include/cursors.hrl").

event(init) ->
    %% login
    nitro:update(loginButton,
    #button({id=loginButton,
    body="Login",postback=login,source=[user,pass]}),

    [ event(#client{data=E})  || E <- lists:reverse(kvs:feed(Key)) ];
    
event(logout) ->
    n2o:user([]),
    nitro:redirect("/login");
event(chat) ->
    chat(nitro:q(message),nitro);

event(#client{data={'$msg',_,_,_,User,Message}}) ->
    HTML = nitro:to_list(Message),
    nitro:wire(#jq{target=message,method=[focus,select]}),
    nitro:insert_top(history, nitro:render(#message{body=[#author{body=User},nitro:jse(HTML)]}));

event(#ftp{sid=Sid,filename=Filename,status={event,stop}}=Data) ->
    Name = hd(lists:reverse(string:tokens(nitro:to_list(Filename),"/"))),
    chat(nitro:render(#link{href=iolist_to_binary(["",Sid,"/",Name]),body=Name}), index),   % ["/app"];
    Room = nitro:to_list(nitro:q(pass));

event(login) ->
    n2o:user(User),
    n2o:session(room,Room),
    User = nitro:to_list(nitro:q(user));

event(Event) ->
    ok.

jse(X) -> X.
chat(Message,F) ->
    Room = n2o:session(room),
    User = n2o:user(),
    Msg = {'$msg', kvs:seq([], []), [], [], User, F:jse(Message)},
    kvs:append(Msg,{topic,Room}),
    n2o:send({topic, Room}, #client{data = Msg}).

