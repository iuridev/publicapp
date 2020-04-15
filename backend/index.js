const express = require('express')
const routes = require('./src/routes/routes')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Starting Back-end');
})

//teste 2