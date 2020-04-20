import axios from 'axios';
/**
 * 
 * @param {*} emailData The form data for the email
 */

export const sendEmail=emailData=> axios.post("/api/email", emailData)