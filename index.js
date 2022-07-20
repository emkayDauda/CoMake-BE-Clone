require("dotenv").config();
const app = require("./api/server");

const port = process.env.PORT || 3456;

app.listen(port, () => console.log(`Listening on port ${port}`));
