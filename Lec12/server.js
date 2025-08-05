const { config } = require("node:process")
const {MongoClient, Collection} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbname = 'chitkara' 
async function main() {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbname);
    // const collection = db.collection('students');

    // const insertresult = await collection.insertMany([
    //     { name: "Alice", age: 20, roll: 101 },
    //     { name: "Bob", age: 21, roll: 102 },
    //     { name: "Charlie", age: 22, roll: 103 }
    // ]);
    // console.log("inserted",insertresult);
    const collection = db.collection('students');
    const filterresult = await collection.find({a:3}).toArray();
    console.log(filterresult);

    const findevery = await collection.find().toArray();
    console.log(findevery);

    const updatevalue = await collection.updateOne({a:3},{$set : {b:1}});
        console.log(updatevalue);
        
    
    

    return 'done';
    
}

main()


