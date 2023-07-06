# xui-next
Prototype repo for XUI improvements
nx run app-shell:serve -- to serve the prototype shell
nx run-many -t test -- run all tests

First, you would want to know which process is using port 3000

sudo lsof -i :3000
this will list all PID listening on this port, once you have the PID you can terminate it with the following:

kill -9 <PID>
