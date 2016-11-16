# Goal
Create a web application that allows users to control what is displayed on a DIY Digital Mirror that uses a Raspberry Pi.
# Function
The application allows users to control what and where widgets are displayed on the mirror without have to access the Raspberry Pi it's self.
# Technology used
MongoDB, AngularJS, Express, Node, HTML, CSS, Bootstrap, Weather Underground api, News api, Mongoose, Passport, and Javascript.
## Known Bug
When user tries to move where widgets are displayed the element no longer displays on the DOM
### Fix
The bug apears to be caused by using jquery-ui with elements dynamicly created by AngularJS
  - solution remove jquery-ui and replace with a more friendlier with AngularJS framework

# Stretch Goals
- give responsive feed back to user when they interact with the application
- use Heroku to host the web app
- clean the code and fix any naming conventions to be more clear and precise
