import express from 'express';
import { MongoClient } from 'mongodb';

let app = express();

app.use(express.static('dist'));

let db;

console.log(process.env, 'URI');

MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err, database) => {
    if (err) throw err;

    db = database.db();

    app.listen(3000, () => console.log("Listening on port 3000"));
});

app.get("/data/links", (req, resp) => {
    db.collection("links").find({}).toArray((err, links) => {
        if (err) throw err;
        console.log(links);
        resp.json(links);
    });
});


//  db = database.db('demo'); // database is connected client of the database, instead of the database itself
//  hence this method is called which accepts dbName as parameter. If db name is there in the URI just call 
//  the method