import express from "express";

const app = express();
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hai", (req, res) => {
  res.send("hai from port 8080");
});

app.get("/name", (req, res) => {
  res.send("hey! its me ajeesh");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
