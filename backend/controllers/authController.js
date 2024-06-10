// backend/controllers/authController.js
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  const {username, email, password} = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({username, email, password: hashedPassword})
    const savedUser = await newUser.save()

    const token = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.status(201).json({token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const signin = async (req, res) => {
  const {email, password} = req.body
  try {
    const user = await User.findOne({email})
    if (!user) return res.status(404).json({message: 'User not found'})

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword)
      return res.status(400).json({message: 'Invalid password'})

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.status(200).json({token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = {signup, signin}
