import * as mongoose from "mongoose";

export default function start() {
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect("mongodb://ip:port/rpggenerator", { auth:{
        authdb: "admin",
        user: "admin",
        password: "password"
    }}).then(function(db){
        
    }, { useNewUrlParser: true });
    
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'connection error:'));
}
