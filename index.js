const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>You reached ${req.url}</h1>

    <p>Please visit <a href="/welcome">this page</a>
  `);
});

app.get("/welcome", (_, res) => {
  res.send("<h1>Welcome</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

