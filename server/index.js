require('dotenv').config();
const app = require("./app");

const port = 80;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
