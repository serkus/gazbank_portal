-module(profile).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
-include_lib("n2o/include/n2o_json").
-include_lib("kvs/include/cursors.hrl").
-include_lib("kvs/include/cursors.hrl").

-reacord(user,{username, password, viewProfil, ldapid}).

event(logout)->
    %n2o:user([]),
    %nitro:redirect("/");
    ok;

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

event(getprofile) ->
    getprofile(mqtt.q());

event(setprofile) ->
    ok.

event(_) -> [].


get_ldap(id_data)->
    {ok, result} = eldap:search(id_data)->
        eldap: bind(result),
    {error, raison} = eldap:search(id_data)->
        raison.

get_profile(id) ->
    ok.

set_field(Fields)->
    ok.