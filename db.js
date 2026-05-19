// Source - https://stackoverflow.com/a/75938417
// Posted by ti.tanicc
// Retrieved 2026-05-19, License - CC BY-SA 4.0

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;


// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/"

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI, () => {
//             console.log("Connected to Mongo Successfully");
//         })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// module.exports = connectToMongo;