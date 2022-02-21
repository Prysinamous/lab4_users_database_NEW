const mongoose = require('mongoose')


const CompanySchema = new mongoose.Schema({

    name:{
        type: String,
    },
    catchPhrase:
    {
        type: String,
    },
    bs:
    {
        type: String,
    }
})

const GeoSchema = new mongoose.Schema({
    lat: 
    {
        type: Number,
    },

    lng:
    {
        type: Number,
    }
})


const AddressSchema = new mongoose.Schema({

    geo: {
        type: GeoSchema,
    },

    street: 
    {
        type: String,
    },

    suite:
    {
        type: String,
    },

    city:
    {
        type: String,
        match: [/^[a-zA-Z ]*$/, "hi only spaces and leters~"]
    },

    zipcode:
    {
        type: String,
        match:[/[0-9]{5}-[0-9]{4}$/, "HAUU pls only DDD-DDD format please"]
    },
    
})


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name!'],
   
  },

  username: {
    type: String,
    required: true,
    minlength: 4,
   
  },

  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter valid email format"]   
  },

  phone:
  {
      type: String,
      required: true,
      match: [/[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Use the valid phone format pls!"]
  },

  website:
  {
      type: String,
      required: true,
      match: [/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi, "Enter a correct URL"]
   },

   address:
   {
       type: AddressSchema,
       required: true
   },

   company:
   {
       type: CompanySchema,
       required: true
   }

});

// Create Model
const User = mongoose.model("User", UserSchema);
module.exports = User;


