
module.exports = {
    name: process.env.NAME,
    keySession: process.env.KEY,
    maxAgeSession: process.env.MAXAGE,
    mongoDB: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jzme5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
}
