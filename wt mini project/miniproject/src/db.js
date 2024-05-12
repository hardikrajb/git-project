const { MongoClient } = require('mongodb')
let dbConnection
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://hardikrajb03:20-Sep-2003@cluster0.hyif4gm.mongodb.net/?retryWrites=true&w=majority')
        .then((client) => {
            dbConnection = client.db()
            returncb()
        })
        .catch(err => {
             console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}