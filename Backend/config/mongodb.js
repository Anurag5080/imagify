import mongoose from 'mongoose';

const connectDB = async ()=>{

    mongoose.connection.on('connected', ()=>{
        console.log("Database Connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}


// import { Client } from "pg";

// const pgClient = new Client("postgresql://neondb_owner:npg_Q2Nb0vUBpxnR@ep-tiny-meadow-a5wi50z4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require")

// const pgClient = new Client({
    //     user: "neondb_owner",
    //     password: "npg_Q2Nb0vUBpxnR",
    //     port: "5432",
    //     host: "ep-tiny-meadow-a5wi50z4-pooler.us-east-2.aws.neon.tech",
    //     database: "neondb"
    // })
    
    // const connectDB = async()=> {
        //     await pgClient.connect();
        // }
        
export default connectDB;