import mongoose from "mongoose";

const username = "pidot-user";
const password = "pWRuj4ahYATVH6JJ>";
const cluster = "pidot-cluster.biizj54";
const dbname = "events";

const uri = 
//`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`;
// `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
"mongodb+srv://pidot-user:pWRuj4ahYATVH6JJ@pidot-cluster.biizj54.mongodb.net/?retryWrites=true&w=majority";

export async function connectDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    console.log("connecting....");

    await mongoose.connect(uri);
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
}
