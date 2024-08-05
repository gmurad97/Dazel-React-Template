const path = require("path");
const express = require("express");
const cors = require("cors");
const ApiKeyMiddleware = require("./middleware/ApiKeyMiddleware.js");
const ServerStatus = require("./routes/ServerStatus.js");
const ProfileData = require("./routes/ProfileData.js");
const Statistics = require("./routes/Statistics.js");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/*==========MAIN - START==========*/
app.use("/api/v2", ServerStatus);
app.use("/api/v2", ApiKeyMiddleware, ProfileData);
app.use("/api/v2", ApiKeyMiddleware, Statistics);
/*==========MAIN - ENDED==========*/

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});