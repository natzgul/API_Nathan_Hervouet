const app = require('express')()
const user = require('./user')
const user = require('./item')

const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use('/user', user)
app.use('/item', user)

app.get('/', (req, res) => {
    res.send('Hello world !')
})

app.listen(8080, () => {
     console.log('App listening on port 8080')
    })