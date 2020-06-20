-module(profile).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
-include_lib("n2o/include/n2o_json").
-include_lib("kvs/include/cursors.hrl").

-reacord(User,{username, password, viewProfil,e ldapid}).

event(logout) ->
    n2o:user([]),
    nitro:redirect("/");

event(init) ->
    nitro:update(loginButton,
      #button{id=loginButton,
              body="Login",postback=login,source=[user,pass]});
event(login) ->

    User = nitro:to_list(nitro:q(user)),
    n2o:user(User),
    %n2o:session(room,Room),
    nitro:clear(login),

    %nitro:redirect("/index.htm?room="++Room),
    ok;

event(_) -> [].


get_profile(id) ->
    ok.

set_field(Fields)->
    ok.