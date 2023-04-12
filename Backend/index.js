const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = 5000


app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ygyoxnw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const runMongoOperation = async () => {
    try {
        const userCollections = client.db("metaStoredb").collection("users")

        // users
        app.post("/users", async (req, res) => {
            const user = req.body;
            const result = await userCollections.insertOne(user);
            res.send(result)
        })
    }
    catch (err) {
        console.log(err)
    }
}
runMongoOperation().catch(err => console.error(err))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})