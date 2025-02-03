import express from "express";

const app = express();
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
