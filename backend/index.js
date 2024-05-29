const express = require('express')
const app = express()
const port = 5000;
const mongoDB = require('./db');
const cors = require('cors');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoDB();

app.use(cors());

app.use(express.json());
app.use('/api', require('./Routes/AuthRoute'));
app.use('/api', require('./Routes/ProductRoute'));
app.use('/api', require('./Routes/CategoryRoute'))
app.use('/api', require('./Routes/OrderRoute'))


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})