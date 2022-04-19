import asyncHandler from "express-async-handler"
import Admin from "../Models/adminModel.js"
import generateToken from "../utils/generateToken.js"
import mongoose from "mongoose"
// @desc  Auth the user & get token
// @route POST /api/admin/login
// @access Public

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const admin = await Admin.findOne({ email })

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      phoneNumber: admin.phoneNumber,
      token: generateToken(admin._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


// @desc  get admin profile
// @route GET /api/admins/profile
// @access Private

const getAdminProfile = asyncHandler(async (req, res) => {
    
  const admin = await Admin.findById(req.admin.id)


    if(admin){
         res.json({
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          phoneNumber: admin.phoneNumber,
          token: generateToken(admin._id),
    })
    }else{
        res.status(401)
        throw new Error('invalid email or password')
    }

    
})

// @desc  update admin profile
// @route PUT /api/admins/profile
// @access Private

const updateAdminProfile = asyncHandler(async(req, res) => {
    const admin = await Admin.findById(req.admin._id)

    if(admin){
        admin.name = req.body.name || admin.name
        admin.email = req.body.email || admin.email
        if(req.body.password){
            admin.password = req.body.password
        }

        const updatedAdmin = await admin.save()

        res.json({
        _id: updatedAdmin._id,
        name: updatedAdmin.name,
        email: updatedAdmin.email,
        isAdmin: updatedAdmin.isAdmin,
        token: generateToken(updatedAdmin._id),
        })

    }else{
        res.status(401)
        throw new Error('Admin not found')
    }
})



export { authAdmin, getAdminProfile, updateAdminProfile }