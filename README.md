# Dumpling Truck Client
_by Kim Robinson_

#### A React application to act as a client for my [Dumpling API](https://github.com/kimmykokonut/dumpling-api), built with Django

WIP

### React Component Diagram
![Component Diagram](./src/assets/diagram.drawio.svg)

Bugs:
* On dumpling detail component, issue rendering Tag data.  The tagData is correct (and array of strings) but it is not rendering correctly on the Detail page.


Todo:
Detail: 
  * add tags property (issue with async/useeffect/state)
Create:
  * render form (make sure user is logged in)
  * check token first!
Edit:
  * add form, redirect to detail page (log in permission?)
Delete:
  * button. redirect to list/index page (log in permission?)
User:
  * add registration/login/logoutfunctionality (have conf on page)
Style
Tags/Origin: Need own Components/Controller to be able to add tags/origin data...
Security: currently the token from the signin api call is saved to localstorage. better solution?
