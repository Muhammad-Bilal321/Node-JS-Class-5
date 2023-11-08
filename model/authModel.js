const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
userName:{
    type:String,
    require:[true, "User Name is Required"]
},
password:{
    type:String,
    require:[true, "User Name is Required"]
},
contact:{
    type:Number,
    require:[true, "User Name is Required"]
}
})

const authModel = mongoose.model("user", userSchema)
module.exports = authModel;