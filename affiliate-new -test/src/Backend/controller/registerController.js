const registerModel = require("../model/registerModel")
const bcrypt = require("bcrypt")

const { isValidMail, isValid, isValidName, isValidMobile, isValidPassword, isValidRequestBody } = require("../validator/validation")

const RegisterUser = async function (req, res) {
    try {
        let data = req.body 

        if (!isValidRequestBody(data)) return res.status(400).send({ status: false, msg: "body cant't be empty Please enter some data." })

        let { FirstName, LastName, Email, Phone, Password } = data

        if (!isValid(FirstName)) return res.status(400).send({ status: false, message: "FirstName is required" })
        if (!isValid(LastName)) return res.status(400).send({ status: false, message: "LastName is  required" })
        if (!isValid(Email)) return res.status(400).send({ status: false, message: "email id is required" })
        if (!isValid(Phone)) return res.status(400).send({ status: false, message: "phone is required" })
        if (!isValid(Password)) return res.status(400).send({ status: false, message: "password is required" })

        if (!isValidName.test(FirstName)) return res.status(406).send({  
            status: false, message: "Enter a valid firstname, length of f-name has to be in between (3-20), use only String"})
    
        if (!isValidName.test(LastName)) return res.status(406).send({
            status: false, message: "Enter a valid Lastname, length of lastName has to be in between (3-20), use only String"})
        
        if (!isValidMail.test(Email)) return res.status(406).send({
            status: false, message: "email must be in correct format for e.g. xyz@abc.com",
        })
        let uniqueEmail = await registerModel.findOne({ email: Email })
        if (uniqueEmail) return res.status(400).send({ status: false, message: `This ${Email} email Id Already Exists.` })

        if (!isValidMobile.test(Phone)) return res.status(406).send({
            status: false, message: "mobile no. is not valid it must be 10 digit Number & it should be a indian mobile no.",
        })

        if (!isValidPassword(Password)) return res.status(406).send({
            status: false, message: "passWord should be in between(8-15) & it must contain upperCase, lowerCase, specialCharecter & Number",
        })
        let newPassword = await bcrypt.hash(Password, 10) //using bcrypt for password hashing
        Password = newPassword

        const userData = { FirstName, LastName, Email, Phone, Password}
        let savedData = await registerModel.create(userData)
        res.status(201).send({ status: true, message: "Success", data: savedData })
    }
    catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { RegisterUser }