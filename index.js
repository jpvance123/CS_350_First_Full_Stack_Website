const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

const router = express.Router;
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set a static folder
app.use(express.static(path.join(__dirname,'public')));
app.use('/', router);



app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}/`));
