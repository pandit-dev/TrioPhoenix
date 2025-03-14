import express from "express"
import { getContactMessage, sendContactMessage } from "../controllers/contactController.js";
// import isLoggedIn from "../middlewares/isLoggedIn.js";
// import { isAdmin } from "../middlewares/isAdmin.js";
const router = express.Router();

router.post('/', sendContactMessage);
router.get('/', getContactMessage);

export default router;
