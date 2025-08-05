const user = require('../models/user');
const jwt = require('jsonwebtoken');

const generatetoken = (user) =>{
    return jwt.sign({user},process.env.jwt);
}

const registerUser = async (req, res) => {
    const { firstname, rollno, email } = req.body;

    if (!firstname || !rollno || !email) {
        return res.status(400).send({ message: "Please enter valid details" });
    }

    const userexist = await user.findOne({ email });
    if (userexist) {
        return res.status(400).json({ message: "User already exists", user: userexist });
    }

    const newuser = await user.create({ firstname, rollno, email });
    const token = generatetoken(newuser);


    return res.status(201).json({ message: "User registered", user: {newuser}, token });
};

const loginUser = async (req, res) => {
  const {email, rollno} = req.body;

  // validation
  if(!email|| !rollno){
    return res.status(400).json({message: "No user found"});
  }

  const userExists = await user.findOne({email});
  console.log(userExists);
  
  if(!userExists){
    return res.status(400).json({message: "No user found"});
  }

  if(req.body.rollno != userExists.rollno){
    return res.status(400).json({message: "Incorrect Password"})
  }
  const token = generatetoken(userExists);
  return res.status(200).json({message: "LoggedIn", token});
};

module.exports = { registerUser , loginUser}; 
