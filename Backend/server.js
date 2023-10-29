const  mongoose  = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({path:'./config.env'});

//Port
const port = process.env.PORT || 3000;
//DB string
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

//Connect to DB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'));

//Start server
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
})
