const MongoURL = 'mongodb://localhost:27017/todo';

module.exports = (mongoose) => {
  mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(() => console.log("We are in the DB"))
    .catch(() => console.log("Something is wrong. We can't connect DB!"))
}