const enquiry = require('../models/enquiry')

const createEnquiry = async (req, res) => {
    try {
        const newEnquiry = new enquiry(req.body);
        await newEnquiry.save();
        res.status(201).json({ message: "Enquiry form submitted successfully! Our staff contact you shortly", data: newEnquiry });
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({ message: "We have some technical issue! please try again shortly" })
    }
}

const getAllEnquiry = async (req, res) => {
    try {
        const getAll = await enquiry().find()
        res.status(200).json({ message: "Successfully get all the data", data: getAll })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({ message: "Issue when try to get data from database!" })
    }
}

const getEnquiryByProp = async (req, res) => {
    try {
        const getEnquiryByReq = await enquiry.find(req.body)
        res.status(201).json({ message: "Successfully get the data", data: getEnquiryByReq })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({ message: "Issue when try to get data from database!" })
    }
}

const getSourceDetail = (req, res) => {
    try {
        const source = ['Google', 'Social Media', 'Referral', 'Others']
        res.status(201).json({ "Source": source })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({ Message: 'Failed to load the source' })
    }
}

module.exports = ({
    createEnquiry,
    getAllEnquiry,
    getEnquiryByProp,
    getSourceDetail
})