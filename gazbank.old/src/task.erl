-module(task).
-include_lib(eldap).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").

-reacord(User,{username, password, ldapid}).

-record(Task, {id, theme, location, title, short, text, likes, dislikes}).

get_ldap(id_data)->
	{ok, result} = eldap:search(id_data)->
   		eldap: bind(result),
   	{error, raison} = eldap:search(id_data)->
   		raison.
get_tasks(Id_task) ->
    ok.

set1_task(#Task) ->
    ok.