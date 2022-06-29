const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')
      
      // go to the next middleware in the route
      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const isLoggedIn = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')
      // go to the next middleware in the route

      res.locals.authenticated = true
      next()
    } catch (error) {
      res.locals.authenticated = false
      next()
    }
  }

  if (!token) {
    res.locals.authenticated = false
    next()
  }
})

function authRole(role) {
  //return a middleware for the route
  return (req, res, next) => {
    //check if the current user role is allowed to access the route
    if (req.user.role !== role) {
      res.status(401)
      return res.send('Unauthorized role access')
    }
    next()
  }
}

module.exports = { protect, isLoggedIn, authRole }