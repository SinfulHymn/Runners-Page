
<br />
<div align="center">
  <a href="https://github.com/Kmachappy/Runners-Page">
    <img src="https://i.imgur.com/ys3rd2e.png" alt="Logo" width="250" height="150">
  </a>

<a href="https://github.com/Kmachappy/Runners-Page">
<h3 align="center">Runners Page</h3>
</a> 

  <p align="center">
    <p>Another Race Events Page</p>
	A Cloud Database of Running based Races/Events!<br />
    <a href="https://github.com/Kmachappy/Runners-Page"><strong>Live Website - Runners Page</strong></a>
    <br />
	CRUD Web Application built on <br/>
    <a href="https://nodejs.org/en/">Node.js</a>
    ·
    <a href="https://expressjs.com/">Express</a>
    ·
    <a href="https://www.mongodb.com/">MongoDB</a>
  </p>
</div>

# About
Description            |  Screenshot
:---:|:----:
| <p align="left">- A cloud based web application that displays a directory of Running based Races/Events. <br> - Users will be able to explore Races/Events and view all their details about the Event! <br> - Users can leave a review on Races/Events they have participated in! <br>- Users are also encouraged to contribute by updating outdated Race/Event Data or adding new Race/Event's to the database as well. <br></p> | ![](https://i.imgur.com/CtaWKbU.png) | 





<p align="right">(<a href="#top">back to top</a>)</p>

# Functionality
- In this app we will access a database of race events and display them on the index page

- On the index page we have four functionalities
    - Be able to use the Navigation link to sort events by type
    - User will be able to sign up or log in and then be granted access to
        - create a new race event 
        - add reviews to races events
        - update race event data and update database

# Current State

<!-- - To do this we will be utilizing the strava api app to get user activity data 
    
- hardships of api oauth2 authentication code and authorizations, tokens and token refresh
    - I have to generate authorization code from an oauth2 authorization page


- With the authorization page we mimic as if we were logging into an app that will use our authorization login 

- Once this authorization is done, users will be able to see activities with map data and a poly line of the specific data

- user will be able to see their average data points and highest data point
    - avg hr, avg pace, avg run, best miles, longest milage, 

- Atheletes need an easy to access website to view their atheletic activities across different plateforms and their visualization. -->
<p align="right">(<a href="#top">back to top</a>)</p>





# Roadmap and future Implementations

<!-- - add authorization page so the user could import their peronal data on to the page
- add poly line to all user activities
- Create a roadmap of all the miles onto the map.
    - When user hovers/clicks a mile or activity it will highlight and zoom onto location on map
- add more data points from different apps
- change user interface.
- In progress: users will be able to login and authorize strava to allow me to use and propagated their own use data
- add more map styling and interactiveness -->
<p align="right">(<a href="#top">back to top</a>)</p>

# User Story

- As a user, I should be able to see directory of Running Races/Events on Index 
- As a user, I should be able to click any of the featured Race for their full description/data on index page
- As a user, I should be able to navigate the navigation links to sort events by race type on index and Results/filtered
- As a user, On the Results/filtered page I should be able to see a directory of event filtered by event type
- As a user, I should be able to click on any Race/Event to see their complete data on the Results/Filtered page
- As a user, On the show page I should be able to see all an Events data
- As a user, On the show page I should be able to update the event data
- As a user, On the show page I should be able add a review for the event
- As a user, I could contribute to the database of events by creating another race event on the database on the head of the page
- As a user, I should be able to log in  on the header and view and edit my reviews

<p align="right">(<a href="#top">back to top</a>)</p>

# Technologies used 

- HTML
- CSS
- JavaScript/jQuery
- Node.js
- MongoDB
- Mongoose
- Express
- EJS


<p align="right">(<a href="#top">back to top</a>)</p>

 # API's used
 <!-- - **[Strava API](https://developers.strava.com/)**. -->
 - **[Leaflet API](https://leafletjs.com/SlavaUkraini/)**.
 - **[mapbox API](https://leafletjs.com/SlavaUkraini/)**.
<p align="right">(<a href="#top">back to top</a>)</p>

# Runers Page WireFrame and ERD

Index/Home             |  Results/Filtered
:-------------------------:|:-------------------------:
![](https://i.imgur.com/CtaWKbU.png)  |  ![](https://i.imgur.com/0fxtC01.png)

Show/Description             |  ERD
:-------------------------:|:-------------------------:
![](https://i.imgur.com/0At4nOQ.png)  |  ![](https://i.imgur.com/Y4mWTw2.png)

<p align="right">(<a href="#top">back to top</a>)</p>


# Resources/Links
- https://developers.strava.com/
- https://developers.strava.com/docs/getting-started/
- https://leafletjs.com/SlavaUkraini/reference.html
- https://www.strava.com/oauth/authorize?client_id=80013&redirect_uri=http://localhost&response_type=code&scope=activity:read_all
<p align="right">(<a href="#top">back to top</a>)</p>
