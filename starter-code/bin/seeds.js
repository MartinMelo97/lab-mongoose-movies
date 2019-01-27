const Celebrity = require('../models/Celebrity')

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


celebrities.map((celebrity)=>{
    Celebrity.create(celebrity)
})

console.log("YA SE AGREGARON")
