const router = require("express").Router();

// const authController = require("../controllers/authController");
// const tokenMiddleware = require("../middleware/tokenMiddleware");
const { AuthModel } = require("../../database/models/authModel");
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, VERIFICATION_SID } = process.env;
const express = require('express');
const twilio = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);


router.post("/register", async (req, res) => {
    try {
        const { phone } = `+${req.body.phoneNumber}`;
        const user = await AuthModel.findOne({ phone });
        if (user) {
            return res.status(400).json({
                message: "Number already exists"
            });
        } else {
            const newUser = new AuthModel({
                phone,
            });
            twilio.verify.services(VERIFICATION_SID).verifications
            .create({ to: `+${req.body.phoneNumber}`, channel: 'sms' })
            .then(verification => {
                res.send({ verification });
                });
            await newUser.save();
            return res.status(200).json({
                message: "Number registered successfully"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});


// router.get('/register', (req, res) => {
//     twilio.verify.services(VERIFICATION_SID).verifications
//     .create({ to: `+${req.query.phoneNumber}`, channel: 'sms' })
//     .then(verification => {
//         res.send({ verification });
//     });
// });

router.post("/verify", async (req, res) => {
    try {
        const { code } = req.body;
        const { phone } = `+${req.body.phoneNumber}`;
        const user = await AuthModel.findOne({ phone });
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }
        const verification = await twilio.verify.services(VERIFICATION_SID).verificationChecks
            .create({ to: `+${req.body.phoneNumber}`, code });
        if (verification.status === "approved") {
            return res.status(200).json({
                message: "Number verified successfully",
                verification
            });
        }
        return res.status(400).json({
            message: "Invalid verification code",
            verification
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// router.get('/verify', (req, res) => {
//     twilio.verify.services(VERIFICATION_SID).verificationChecks
//     .create({ to: `+${req.query.phoneNumber}`, code: req.query.code })
//     .then(verification => {
//         res.send({ verification });
//     });
// });

// route.post("/sendOtp", authController.sendOTP);
// route.post("/verifyOtp", authController.verifyOTP);
// route.post("/register", authController.register);
// route.post("/login", authController.login);

// route.post("/login", tokenMiddleware.login, authController.login);


module.exports = router;
