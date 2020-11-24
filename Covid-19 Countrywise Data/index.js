const express = require('express')
const NovelCovid = require('novelcovid');
const exhbs = require('express-handlebars');
const { response } = require('express');


NovelCovid.all().then((response)=> console.log(response))

const app = express()

app.set('view engine','hbs');
app.engine('hbs', exhbs({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname + '/views/layouts/'
})); 

app.get('/countries',(req,res)=>{
    NovelCovid.countries()
    .then((response)=>{
        res.render('home',{info:response})
    })
})
 
app.listen(4000, () => {
    console.log(`Example app listening on port port! 4000`)
})

