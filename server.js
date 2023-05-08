const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

const port = 80;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
