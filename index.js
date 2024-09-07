const express = require('express');

const app = express();

const port = process.env.PORT || 9000;

app.get('', (req, res) => {
    res.send('yayyy')
})

app.listen(port, () => console.log(`listening on port: ${port}`))