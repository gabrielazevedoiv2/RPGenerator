import * as dotenv from 'dotenv';
dotenv.config();

import * as mongoose from "mongoose";

export default function start() {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.DBURL, { auth:{
        authdb: process.env.AUTHDB,
        user: process.env.DBUSER,
        password: process.env.PASS
    }}).then(function(db){
        
    }, { useNewUrlParser: true });
    
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error:'));
}
