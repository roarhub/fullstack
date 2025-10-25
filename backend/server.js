import express from "express";
import cors from "cors";

//initialize the express
const server = express();

server.use(cors());
server.use(express.json()); //converts reqs to. a json fmt

// define endpoints and listen to them
server.get('/api', (req, res) => {
  console.log("homepage endpoint has been visited");
  res.send("welcome to home page");
})

//provide status before data you're sending back
// res.status(100).send();

server.get('/api/register', (req, res) => {
  res.status(200).send({ message: "registration is coming soon" });
})

server.post('/api/register', (req, res) => {
  res.status(200).send({ message: "POST method called" });
})

server.get('/api/profile', (req, res) => {
  res.status(200).send({
    fullName: "Harry Chidera",
    department: "computer robotics",
    course: "Industrial training",
    duration: "14 weeks",
    isStudent: true
  })
})

server.post('/api/profile', (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data.code) {
    res.status(400).send({ error: "code is required" })
  } else if (data.code !== 1234) {
    res.status(400).send({ error: "code is wrong" })
  } else {
    res.status(200).send({ success: "code is correct" })
  }
})

//listen to the endpoint
server.listen(3000, () => {
  console.log("server is running..");
})
