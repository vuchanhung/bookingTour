import express from 'express'
import { login, register } from '../controllers/authController.js'

const router = express.Router()

//user register
router.post('/register',register)
//user login
router.post('/login',login)

export default router