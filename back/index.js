const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
require("dotenv").config({ path: ".env" });
// cors - allow connection from different domains and ports
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");

const mongoDB = `mongodb+srv://user:${process.env.DB_PASSWORD}@democluster.grcn57q.mongodb.net/hobbyappDB`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database test connected");
});

// hobbyscheema
const hobbySchema = new mongoose.Schema({
  // _id: { type: String, required: false },
  hobbyname: { type: String, required: true },
  outside: { type: Boolean, required: false },
  inside: { type: Boolean, required: false },
  toolsneeded: { type: Boolean, required: false },
  otherhumansneeded: { type: Boolean, required: false },
  tags: { type: Array, required: false },
});

const Hobby = mongoose.model("Hobby", hobbySchema, "hobbies");

//GET hobbies
app.get("/hobbies", async (request, response) => {
  const hobbies = await Hobby.find({});
  response.json(hobbies);
});

//POST hobby
app.post("/hobbies", async (request, response) => {
  const hobbyname = request.body.hobbyname;
  const outside = request.body.outside;
  const inside = request.body.inside;
  const toolsneeded = request.body.toolsneeded;
  const otherhumansneeded = request.body.otherhumansneeded;
  const tags = request.body.tags;

  if (hobbyname === ""){
    throw Error;
  }

  try {
    const hobby = new Hobby({
      hobbyname: hobbyname,
      // done: donelkm,
      outside: outside,
      inside: inside,
      toolsneeded: toolsneeded,
      otherhumansneeded: otherhumansneeded,
      tags: tags,
    });
    const savedHobby = await hobby.save();
    response.json(savedHobby);
  } catch (error) {
    response.status(400);

    response.send({
      error: "Your hobby didn't include enough required info to be added",
    });
  }
});

app.listen(port, () => {
  console.log("Example app listening on port 3000");
});
