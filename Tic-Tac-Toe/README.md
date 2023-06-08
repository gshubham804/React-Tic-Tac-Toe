# Learning docker in reactjs
## Command used for docker

### (i) docker --verison
for checking the docker version on your system.
### (ii) docker build -t tic-tac-toe-image
for building docker image.
### (iii) docker image ls
It shows the list of all docker image.
### (iv) docker run --name tic-tac-toe-container --rm tic-tac-toe-image
It used for run the docker container with docker image.
For example: In this command, 
--name >> used to naming for container
--rm >> used to force-remove a running container
### (v) docker ps
This command shows you all running docker container with their name and id.
### (vi) docker stop tic-tac-toe-container
Using this command you can stop desired container using their name or id.
### (vii) docker run --rm --name tic-tac-toe-container -d -p 3000:3000 tic-tac-toe-image
This command is using for mapping the port of your local system to port of docker container because as we know docker have their separate environment.


