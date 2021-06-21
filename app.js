const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('serving realness on port 3000')
})