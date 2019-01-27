const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')

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