const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const generatetoken = require('../utils/generatetoken')

const registerUser = async (req, res) => {
  const { firstname, rollno, email } = req.body;

  if (!firstname || !rollno || !email) {
    return res.status(400).send({ message: "Please enter valid details" });
  }
  try {

    const userexist = await user.findOne({ email });
    if (userexist) {
      return res.status(400).json({ message: "User already exists", user: userexist });
    }
    const haashedpass = await bycrypt.hash(rollno.toString(), 10);  //rollno hashing here
    const newuser = await user.create({ firstname, rollno: haashedpass, email });  //storing the hashed pass
    const token = generatetoken(newuser);


    return res.status(201).json({ message: "User registered", user: { newuser } });
  }
  catch (error) {
    return res.status(500)
  }
};

const loginUser = async (req, res) => {
  const { email, rollno } = req.body;

  // validation
  if (!email || !rollno) {
    return res.status(400).json({ message: "No user found" });
  }

  try {
    const userExists = await user.findOne({ email });
    console.log(userExists);

    if (!userExists) {
      return res.status(400).json({ message: "No user found" });
    }

    const validpass = await bycrypt.compare(rollno.toString(), userExists.rollno);  //comparing the  
    console.log(validpass);

    if (!validpass) {
      return res.status(400).json({ message: "Incorrect Password" })
    }
    const token = generatetoken(userExists);
    return res.status(200).json({ message: "LoggedIn", token });
  }
  catch (error) {
    return res.status(500)
  }
};

const readuser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Please enter a valid email" });
  }

  try {
    const viewuser = await user.findOne({ email });

    if (!viewuser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      message: "User data by email",
      user: viewuser
    });
  } catch (err) {
    console.error("Error fetching user:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { registerUser, loginUser, readuser };

