const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/posts", (_request, response) => {
  fs.readFile("posts.json", "utf-8", (_err, JSONdata) => {
    const data = JSON.parse(JSONdata);

    if (data?.length) {
      response.send(data);
    } else {
      return response.status(404).send("No items found!");
    }
  });
});

app.get("/posts/:id", (request, response) => {
  const id = request.params.id;
  fs.readFile("posts.json", "utf-8", (_err, JSONdata) => {
    const data = JSON.parse(JSONdata);
    const result = data.filter((el) => el.id === +id);

    if (result.length === 1) {
      response.send(result[0]);
    } else {
      return response.status(404).send("Item not found!");
    }
  });
});

app.listen(3000, () => console.log("Running on port 3000"));
