const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const apiRoutes = require("./api");
app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
