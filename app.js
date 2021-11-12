const port = 44444;

const express = require("express");
const path = require('path')

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'ejs')))


app.get('/', (req, res) => {
    res.render('main', { title: 'Home', active: 'main' })
})

app.get('/stocks', (req, res) => {
    res.render('stocks', { title: 'Stocks', active: 'stocks' })
})

app.get('/cryptocurrencies', (req, res) => {
    res.render('cryptocurrencies', { title: 'Сryptocurrencies', active: 'cryptocurrencies' })
})

app.get('/sites', (req, res) => {
    res.render('sites', { title: 'Sites', active: 'sites' })
})

app.get('/lukoil', (req, res) => {
    res.render('one', { title: 'Lukoil', active: 'lukoil', postid: 'lukoil' })
})

app.get('/nornikel', (req, res) => {
    res.render('one', { title: 'Nornikel', active: 'nornikel', postid: 'nornikel' })
})

app.get('/aeroflot', (req, res) => {
    res.render('one', { title: 'Aeroflot', active: 'aeroflot', postid: 'aeroflot' })
})

app.listen(port, function() {
    console.log('Server lisening on ' + port)
})