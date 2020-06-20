-module(task).
-include_lib(eldap).
-include_lib("nitro/include/nitro.hrl").
-include_lib("n2o/include/n2o.hrl").
-include_lib("kvs/include/cursors.hrl").
-reacord(User,{username, password, ldapid}).
-record(task, {id, theme, location, title, short, text, likes, dislikes}).

% Socket events mqtt;
event(addtask)->
	set_task(addtask).

event(gettask)->
	get_task()

event(addlike)->
	ok.

event(addcommit)->
	ok.

% Model task

get_task(Id_task)->
   kvs:get(#task(id_task)).

set_task(Task)->
    kvs:add(#task(task)).

filter_task()->
	kvs:filter(task, 30).

commit([])->
	Commit = nitro:q(to_list),
	kvs:add(Commit).
