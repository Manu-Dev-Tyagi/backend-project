require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
import{DB_NAME} from "./constants"

;(async()=>{
    try {
       await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
       app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log('app is listening on port ${process.env.Port}');
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()