-module(task).
-include_lib(eldap).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
-include_lib("kvs/include/cursors.hrl").

-reacord(User,{username, password, ldapid}).

-record(task, {id, theme, location, title, short, text, likes, dislikes}).

get_tasks(Id_task) ->
   kvs:get(id_task),

set_task(Task) ->
    kvs:add(task).

filter_task() ->
	kvs:filter(30).
