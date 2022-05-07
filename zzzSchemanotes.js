

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
    reviews: [{
        review: String,
        rating: Number,
        reviewedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },{
        timestamps: true
    }]
})

module.exports = mongoose.model("Event", eventsSchema)


const userSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    reviewedEvents: [{
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
            reviews: [{
                review: String,
                rating: Number,
                reviewedBy:{
                    name: String,
                    email: String,
                    avatarURL: String,
                    googleId: String,
                    reviewedEvents: [{
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
                            reviews: [{
                                review: String,
                                rating: Number,
                                reviewedBy:{
                                    type: mongoose.Schema.Types.ObjectId,
                                    ref: 'User'
                                }
                            },{
                                timestamps: true
                            }
                
                            ]
                    }]
                }
            },{
                timestamps: true
            }

            ]
    }]
});

