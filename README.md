# project Name
 Weather-Journal App Project

# Description
create an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.
# Author
Dalia osama El Amir Khaled
# Project Dependencies
express
cors
body-parser
# steps
1-i have already have node installed on my pc so i
installed express by using this command > npm install express 
on terminal then i installed cors by using this command > npm install cors
then i installed body-parser by using this command > npm install body-parser
2- in file server.js
to use package express i used require('express'); then i run express
then to use package body-parser to convert data from server to json
i used require('body-parser'), then i used 
require('cors') to connect browser to local server
3-to make connection between server and project folder
i used app.use(express.static('website'));
4-to use localhost i used port 3000
5-i used function postData to post data to server and function getData to get data from server
6-I Createad API credentials on OpenWeatherMap.com
7-i used function collect to get data from OpenWeatherMap
8-i used function send to send data to local server
9-i used function retrieveData to get data from local server
10-i changed the style in file style.css