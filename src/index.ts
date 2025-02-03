import express from "express";

const app = express();
const PORT = 5001;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
