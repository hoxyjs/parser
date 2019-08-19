import mongoose from "mongoose";
import Course from "./course";

// course will be the name of our cluster
// it's not 'localhost'. It's 'mongo'.
const CONNECTION = "mongodb://mongo:27017/course";
const connect = () =>
    mongoose.connect(CONNECTION, { useNewUrlParser: true });

export default connect;
