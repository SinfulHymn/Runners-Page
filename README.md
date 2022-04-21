
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
	A Cloud Database of Running based Races and Events!<br />
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

<div style="display:flex;">
    <div align="left" style="width:50%;border: 1px solid #333744 ;">
        <div style="margin:5px">
        <h2> Description, Goals, and what this tried to Acheive</h2>
        <p>- Athelets today do not have a centralized site to view their Atheletic activities from runs, cycling and swimming. Today Atheletes depend on their phone to view their activities, that are tracked by a plethora of activity-tracking apps such as Strava, Nike - Run Club, Asics - RunKeeper, UnderArmor - Map my Run, AllTrails, ect.</p>
        <p>- Athelets today do not have a centralized site to view their Atheletic activities from runs, cycling and swimming. Today Atheletes depend on their phone to view their activities, that are tracked by a plethora of activity-tracking apps such as Strava, Nike - Run Club, Asics - RunKeeper, UnderArmor - Map my Run, AllTrails, ect.</p>
        </div>
    </div>
    <div align="right" Style="flex-grow:1;border: 2px solid #333744;width:50%">
        <div style="margin:5px">
        <h2>Screenshot</h2>
        <a href="https://i.imgur.com/CtaWKbU.png">
            <img  src="https://i.imgur.com/CtaWKbU.png" alt="Logo" width="80%" height="360px">
        </a>
        </div>
    </div>
</div>


<p align="right">(<a href="#top">back to top</a>)</p>


# Current State

- In this app we will access a database of race events and display them on the index page

- On the index page we have four functionalities
    - Be able to use the Navigation link to sort events by type
    - User will be able to sign up or log in and then be granted access to
        - create a new race event 
        - add reviews to races events
        - update race event data and update database

- To do this we will be utilizing the strava api app to get user activity data 
    
- hardships of api oauth2 authentication code and authorizations, tokens and token refresh
    - I have to generate authorization code from an oauth2 authorization page


- With the authorization page we mimic as if we were logging into an app that will use our authorization login 

- Once this authorization is done, users will be able to see activities with map data and a poly line of the specific data

- user will be able to see their average data points and highest data point
    - avg hr, avg pace, avg run, best miles, longest milage, 

- Atheletes need an easy to access website to view their atheletic activities across different plateforms and their visualization.
<p align="right">(<a href="#top">back to top</a>)</p>




 # Technologies used 
 - OAuth2 for authorization and token refresh
 - Javascript
 - HTML
 - CSS
<p align="right">(<a href="#top">back to top</a>)</p>

# Roadmap and future Implementations

- add authorization page so the user could import their peronal data on to the page
- add poly line to all user activities
- Create a roadmap of all the miles onto the map.
    - When user hovers/clicks a mile or activity it will highlight and zoom onto location on map
- add more data points from different apps
- change user interface.
- In progress: users will be able to login and authorize strava to allow me to use and propagated their own use data
- add more map styling and interactiveness
<p align="right">(<a href="#top">back to top</a>)</p>

# User Story

- You just finished your marathon, run, or any activity and imported your data on strava. 
- now you want to see your data on a page 
- you click my Athelets views and authorize Atheletes view to connect to strave
- once that authorization is done your activity data propagates on the page
<p align="right">(<a href="#top">back to top</a>)</p>

 # Technologies used 
 - OAuth2 for authorization and token refresh
 - Javascript
 - HTML
 - CSS
<p align="right">(<a href="#top">back to top</a>)</p>

 # API's used
 - **[Strava API](https://developers.strava.com/)**.
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
