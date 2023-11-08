const { SendResponse } = require("../helpers/helpers")
const bcrypt = require("bcryptjs")
const UserModel = require("../model/authModel")
let jwt = require('jsonwebtoken')
const authController ={

    signup: async(req, res)=>{
        try {
            let (userName,password,contact) = res.body
         let obj = (userName,password,contact)
         let errArr = []
         if(!obj.userName){
            errArr.push("User Name Is Required")
         }
         if(!obj.password){
            errArr.push("Password Is Required")
         }
         if(errArr.length>0){
            res.status(300).send(SendResponse(false, "Validation Error", errArr))
            return;
         }
         let userExist = await userModel.findOne({userName: obj.userName})

         if(userExist){
            res.status(300).send(SendResponse(false, " Already a User", ))
            return;
         }
         obj.password = await bcrypt.hash(obj.password, 10);
         
let User = new userModel(obj)
let result =await User.save()

if(result){
    res.status(300).send(SendResponse(true, " User Created", result))
}

        }
         catch (error) {
            
        }
    },
    login: async(req, res)=>{
try {
    let (userName, password) =req.body;

    let obj = (userName , password);
    let existingUser = await UserModel.findOne({userName: obj.userName}) 
if(existingUser){
let correctPassword = await bcrypt.compare(obj.password, existingUser.password);

}
if(correctPassword){
    let token = jwt.sign([...existingUser].process.env.SECRET_KEY)
    res.send(SendResponse(true, "Login Successfully ",
    token= token,
    user = existingUser))
}
else{
    res.send(SendResponse(false, "User Not Found This User",))
}



} catch (error) {
    
}

    },
    protected: ()=>{},
}
module.exports = authController;