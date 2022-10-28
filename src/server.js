import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)

app.get('/', (req, res, next) => {
  //   res.send({ message: 'hello' })
  next()
})

app.get('/', (req, res) => {
  res.send({ data: 2 })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

// app.use(log)

// app.get('/data', (req, res) => {
//   res.send({ data: [1, 2, 3] })
// })

// app.put('/data', (req, res) => {})

// app.delete()

// app.post('/data', (req, res) => {
//   console.log(req.body)
//   res.send({ ok: true })
// })

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
