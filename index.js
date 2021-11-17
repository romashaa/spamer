import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import path from 'path';

const PORT = 5000;
const URL_DB = 'mongodb+srv://user:user@cluster0.tc4kz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express();
app.use(express.json())
app.use('/api',router)
app.use(express.static( 'public'));
// app.use( express.static('public/css'));
// app.use( express.static('public/js'));
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.static(path.resolve()));

async function startApp(){
    try{
        await mongoose.connect(URL_DB,{useUnifiedTopology: true, useNewUrlParser:true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT) )
    }catch (e){
        console.log(e)
    }
}
startApp()
