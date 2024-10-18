import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

try {
  const app = express()

  app.use(helmet())
  app.use(cors())
  app.use(express.json())

  app.post(
      try {

      } catch (error) {
        res.status(500).json({ error: error.message })
      }
    }
  )

  app.listen(3000, () => {
    console.log('Server is listening on port 3000')
  })
} catch (error) {
  console.error(`Error occurred: ${error.message}`)
}
