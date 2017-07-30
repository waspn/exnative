const jsonServer = require('json-server')
const server = jsonServer.create()
const middleWares = jsonServer.defaults()
//var connection = require('./mysql')

server.use(middleWares)
server.use(jsonServer.bodyParser)

server.get('/api', function(req, res, next) {
  const data = {
    data: {},
    code: 200,
    status: 'OK'
  }
  res.send(data)
})

/*server.get('/sqltest', function(req, res, next) {
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error
    console.log('The solution is: ', results[0].solution)
  })
})*/
server.get('/feed/data', function(req, res, next) {
  const data = {
    data: [
      {
        "newsid": 1,
        "topic": "Feed Data",
        "description": "Lorem ipsum vi calas opique"
      },
      {
        "newsid": 2,
        "topic": "Feed Dataaa",
        "description": "Um vi cLorem ipsiqu alas ope"
      },
      {
        "newsid": 3,
        "topic": "Ddt Faee aaa",
        "description": "Mpsiq vi Loas psiq ope"
      }
    ],
    code: 200,
    status: 'OK'
  }
  res.send(data)
})
server.post('/feed/create', function(req, res, next) {
  const data = {
    data: {
      newsid: req.body.newsid,
      topic: req.body.topic,
      description: req.body.description,
    },
    code: 200,
    status: 'ADDED'
  }
  res.send(data)
})
server.post('/feed/update', function(req, res, next) {
  const data = {
    data: {
      newsid: req.body.newsid,
      topic: req.body.topic,
      description: req.body.description,
    },
    code: 300,
    status: 'UPDATE'
  }
  res.send(data)
})
server.post('/feed/delete', function(req, res, next) {
  const data = {
    data: {
      newsid: req.body.newsid
    },
    code: 200,
    status: 'DELETE'
  }
  console.log(data)
  res.send(data)
})


server.listen(3001, () => {
  console.log('JSON Server is running...')
})