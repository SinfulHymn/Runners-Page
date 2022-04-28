
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
    ·
    <a href="https://www.passportjs.org/">Passport</a>
    ·
    <a href="https://oauth.net/2/">OAuth 2.0</a>
  </p>
</div>

# About
Description            |  Screenshot
:---:|:----:
| <p align="left">- A cloud based web application that displays a directory of Running based Races/Events. <br> - Users will be able to explore Races/Events and view all their details about the Event! <br> - Users can leave a review on Races/Events they have participated in! <br>- Users are also encouraged to contribute by updating outdated Race/Event Data or adding new Race/Event's to the database as well. <br></p> | ![](https://i.imgur.com/vUP0yK2.jpg) | 





<p align="right">(<a href="#top">back to top</a>)</p>

# Functionality
- In this app we will access a database of race events and display them on the index page
- User will Be able to view a directory of races and browse any for full information
- User will be able to sign up or log in
- if user is logged in they can
        
        - create a new race event 
        - update race event data 
        - delete race event data
        - add reviews to race event data
        - delete reviews to race event data

- if user is logged in they can view a list of their reviewed race events 


# Routes
```
- get '/auth/google' --> allows user to sign in with their google account to acess features on page

- get '/' --> renders index page and passess through events and user variables, displays db items

- get '/seed' -->  deletes all entries in mongodb and creates a news entries with seed data

- get '/new' --> renders new page and allows user to create a new entry in the db

- get '/show/:id' --> renders show page and passes through users, event, and currently logged, as well as reference to other schemas in user variables, allow user to see db entry in full allow

- get '/edit/:id' --> will render edit page based on the id of the entry in db, passes through event data and logged user variables

- post '/' --> will push new data to db and redirect back to index page

- delete '/show/:id' --> will delete db entry based on id of the db entry

- put '/show/:id' --> will update db entry based on id  of the db entry

- post '/review/:id' --> pushes review schema into event and user redirects to show page 

- delete '/review/:id' --> deletes review from user and event

```

# Models/Schema 
### subject to change

Event/Review Schema:
```
const reviewSchema = new Schema({
    review: String,
    rating: Number,
    reviewedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

//schema
const eventsSchema = new Schema({
    name: {type: String, unique:true, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    image: {type: String, required: true},
    source: {type: String, required: true},
    signup: {type: String, required: true},
    price: {type: String, required: true},
    latlng: [],
    tags:[],
    reviews: [reviewSchema]
})
```
User Schema:
```
const userSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    reviewedEvents: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }]
});
```

# Current State

- User is currently able to visit the site and see a directory of race

- user is able to log in through google strategy OAuth

- user is able to click on any of the races displayed to view full information

- if user is logged in they will have access to be able to delete or edit a race as well as create a new race 

- if user is logged in on the race they are viewing they are able to add a comment

- user will be able to see their comments added to the race they commented on


<p align="right">(<a href="#top">back to top</a>)</p>





# Roadmap and future Implementations

- allow users to only edit and delete their comments

- allow users to view a list of their comments and the races they have reviews in one centralized page

- allow users to sort events by tags



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
- OAuth 2.0
- Passport
- 


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
<!-- - https://developers.strava.com/
- https://developers.strava.com/docs/getting-started/
- https://leafletjs.com/SlavaUkraini/reference.html
- https://www.strava.com/oauth/authorize?client_id=80013&redirect_uri=http://localhost&response_type=code&scope=activity:read_all -->
<p align="right">(<a href="#top">back to top</a>)</p>
