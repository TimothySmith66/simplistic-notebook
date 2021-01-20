const express = require("express");

const app = express();
//const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3001;
app.listen(PORT, function() {})


    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/index.html"));
      });