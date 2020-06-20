-module(profile).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
-include_lib("n2o/include/n2o_json").
-include_lib("kvs/include/cursors.hrl").
-include_lib("kvs/include/cursors.hrl").

-reacord(user,{username, password, viewProfil, ldapid}).

event(logout)->
    n2o:user([]),
    ok;

event(init) ->
   ok.

event(login) ->
    User = nitro:to_list(nitro:q(user)),
    n2o:user(User),
    ok;

event(getprofile) ->
    getprofile(mqtt.q()),
    Id_profile = get_ldap(id),
    Anino = {#user,{_,_,true,Id_profile}->
        kvs:get(profile, {_,_,_, Id_profile}),
    Anino = {#user,{_,_,false,Id_profile}->
        get_ldap(Id_profile).

event(setprofile) ->
    ok.

event(_) -> [].

get_ldap(id_data)->
    {ok, result} = eldap:search(id_data)->
        eldap: bind(result),
    {error, raison} = eldap:search(id_data)->
        raison.

get_profile(id) ->
    kvs:get(user).

set_field(felds)->
    Anino = {#user,{_,_,true, _},
    kvs:get(fields).