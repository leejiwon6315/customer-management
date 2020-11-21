const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "jeewon",
      birthday: "19970102",
      school: "숭실",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "mong",
      birthday: "20141020",
      school: "none",
    },
  ]);
});

app.listen(port, () => {
  console.log(`${port}번 포트에서 실행중`);
});
