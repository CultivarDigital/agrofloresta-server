"use strict";
const nodemailer = require("nodemailer");

module.exports = {
  populate(req) {
    var populate = req.query.populate
    if (populate) {
      if (populate && populate.search('{') != -1) {
        populate = JSON.parse(req.query.populate)
      }
    } else {
      populate = ''
    }
    return populate
  },
  select(req) {
    var select = req.query.select
    if (select) {
      if (select && select.search('{') != -1) {
        select = JSON.parse(req.query.select)
      }
    } else {
      select = ''
    }
    return select
  },
  sendMail(to, subject, message) {
    if (process.env.SMTP_SERVER) {
      let transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      return transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: to,
        subject: subject,
        html: message
      });
    } else {
      console.log("XXXXXXXXXX EMAIL MESSAGE XXXXXXXXXX")
      console.log(to)
      console.log(subject)
      console.log(message)
      console.log("XXXXXXXXXX EMAIL MESSAGE XXXXXXXXXX")
      return new Promise((resolve, reject) => { resolve(false) })
    }
  }
}
