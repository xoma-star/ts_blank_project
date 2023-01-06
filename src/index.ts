import express from 'express'
import authRouter from "./auth";
import cors from 'cors'
import sessions from 'express-session'
import {addTelegramListeners} from "./telegram";

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(sessions({
    secret: 'aboba amogus',
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60, secure: true},
    resave: false,
}))
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.status(200).send('aboab')
})

addTelegramListeners()

app.listen(PORT, () => console.log('started'))