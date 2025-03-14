import { Contact } from "../models/Contact.model.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, phone, service, subject, message } = req.body;
    if (!name || !email || !phone || !service || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const contact = new Contact({ name, email, phone, service, subject, message });
    await contact.save();
    return res
      .status(201)
      .json({ message: "Remarks sent successfully", success: true, contact });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send Remarks." });
  }
};

export const getContactMessage = async (req, res) => {
  try {
    const contactMessage = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ contactMessage, success: true, message: "All Remarks." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to get all Remarks." });
  }
};
