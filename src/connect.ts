import mongoose from "mongoose"
import Course from "./course"

// course will be the name of our cluster
const CONNECTION = "mongodb://localhost:27017/course"
const connect = () =>
    mongoose.connect(CONNECTION)
        .catch(error => { throw new Error(error) });

export default connect
