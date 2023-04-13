import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import AuthRouter from './router/AuthRouter.js'
import MachineRouter from './router/MachineRouter.js'
import ModbusRouter from './router/ModbusRouter.js'
import Maintenance from './router/Maintenance.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
app.use(AuthRouter)
app.use(MachineRouter)
app.use(ModbusRouter)

Maintenance(app)

app.listen(process.env.PORT_APP, () =>
    console.log(`Server up & running in ${process.env.PORT_APP}`)
)
