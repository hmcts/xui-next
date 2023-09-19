# xui-next
Prototype repo for XUI improvements
nx run app-shell:serve -- to serve the prototype shell
nx run-many -t test -- run all tests


# Intellij not releasing port 
First, you would want to know which process is using port 3000

sudo lsof -i :3000
this will list all PID listening on this port, once you have the PID you can terminate it with the following:

kill -9 <PID>

# Running
1) run the api  
nx serve api
2) run the appshell  
nx serve app-shell 
# Development of prototype
nx serve app-shell --open  --devRemotes="manage-cases,show-cases,manage-organisations"


# Users 
Each of the user should automatically navigate to the base feature area of the site  
Demo@hmcts.com should navigate to localhost microsite manage-cases  
User@hmcts.com should navigate to localhost microsite show-cases  
Admin@hmcts.com should navigate to localhost microsite manage-organisation  

Password is guess no attempt has been made to make this secure since thsi will never be production code and we are simply testing if module federation works in practise
