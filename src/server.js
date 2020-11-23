const path = require('path')
const express = require('express')

const app = express();
app.use(
    express.static(path.join(__dirname, '..', 'dist'))
);

const PORT = 80;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});