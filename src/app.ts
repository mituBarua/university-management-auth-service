import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import userService from './app/modules/user/user.service';
import userRouter from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', userRouter)

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
