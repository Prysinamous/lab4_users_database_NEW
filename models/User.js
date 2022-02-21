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

    city: {
        type: String,
        validate: function(value)
        {
            var city = /^[a-zA-Z\s]*$/
            return city.test(value)
        }
    },

    zipcode: 
    {
        type: String,
        validate: function(value)
        {
            var zippy = /\d{5}-\d{4}/
            return zippy.test(value)
        }
    }
    
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
    validate: function(value)
    {
        var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
        return email.test(value)
    }
},

  phone:
  {
      type: String,
      required: true,
      validate: function(value)
      {
        var phone = [/[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Use the valid phone format pls!"]
        return phone.test(value)
    }
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


