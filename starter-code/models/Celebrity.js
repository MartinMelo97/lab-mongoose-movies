const moongose = require('mongoose')
const Schema = moongose.Schema

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        default: "Unknown"
    },
    catchPhrase: {
        type:String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = moongose.model("Celebrity", celebritySchema)