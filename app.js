const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const blogRouter = require('./routes/blogRoutes')
const serviceRouter = require('./routes/serviceRoutes')
const appointmentRouter = require('./routes/appointmentRoutes')
const contactRouter = require('./routes/contactRoutes')
const metaRouter = require('./routes/metaRoutes')

var cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors())

mongoose.connect('mongodb://localhost:27017/rehab').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB:', err.message)
});

app.use(bodyParser.json())

app.use('/api', blogRouter)
app.use('/api', serviceRouter)
app.use('/api', appointmentRouter)
app.use('/api', contactRouter)
app.use('/api', metaRouter)

app.use('/api/images', express.static('images'));

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})