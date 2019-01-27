const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res) => {
    Celebrity.find()
        .then((celebrities) => {
            res.render("celebrities/index", {celebrities})
        })
        .catch((err) =>{
            console.log("An error was ocurred "+ err)
        })
})

router.post('/', (req, res) => {
    Celebrity.create(req.body)
        .then((celebrity)=>{
            res.redirect('/celebrities')
        })
        .catch((err)=>{
            console.log("An error has ocurred " + err)
            res.redirect("/celebrities/new")
        })
})

router.get('/new', (req, res)=>{
    res.render('celebrities/new')
})

router.post('/:id/delete', (req, res) => {
    Celebrity.findByIdAndDelete(req.params.id)
        .then((celebrity)=>{
            res.redirect('/celebrities/')
        })
        .catch((err)=> {
            console.log("An error has ocurred: "+ err)
            res.redirect('/celebrities/')
        })
})

router.get('/:id', (req, res) => {
    Celebrity.findById(req.params.id)
        .then((celebrity) => {
            res.render("celebrities/show", {celebrity})
        })
        .catch((err)=>{
            console.log("An error has ocurred " + err)
        })
})

router.get('/insert', (req, res) => {

    const celebrities = [
        {
            name: "Tom Cruise",
            occupation: "Actor",
            catchPhrase: "Pero sigo siendo el reeeeey"
        },
        {
            name: "Escorpión Dorado",
            occupation: "Comediante",
            catchPhrase: "Peluche en el Estuche PUTOS"
        },
        {
            name: "Martín Melo",
            occupation: "Chingón",
            catchPhrase: "Ps soy chingón"
        },
    ]

    celebrities.map(celebrity => {
        Celebrity.create(celebrity)
    })
})


module.exports = router