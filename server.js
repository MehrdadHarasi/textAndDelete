const express = require("express");
const https = require("https");
const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  //   const url = "https://api.chucknorris.io/jokes/random";
  const url = "https://api.chucknorris.io/jokes/random";

  https.get(url, (response) => {
    console.log(req.statusCode);

    response.on("data", (data) => {
      const info = JSON.parse(data);
      const joks = info.value;
      res.write(`<h1> ${joks} </h1>`);
      res.send();
    });
  });
});

app.listen(PORT, () => {
  console.log(`system is running on ${PORT}`);
});
