const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const Student = require('./models/student')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/students', (req, res) => {
  Student.find({}, function (error, students) {
    if (error) console.error(error);
    res.send({
      students: students
    })
  }).sort({mark: -1})
})

mongoose.connect('mongodb://localhost:27017/university', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.listen(process.env.PORT || 8081)
