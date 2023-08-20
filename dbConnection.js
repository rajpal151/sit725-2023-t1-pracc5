const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://rajpal151:nloeqsf2t5Ga@cluster0.gtmzke5.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;