const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set a static folder
app.use(express.static(path.join(__dirname,'public')));

app.post('/saveUser', [
  // Checks first name
  check('fname', 'First Name is not valid. No special cases or numbers.')   // Second param is error message that if any check fails will be pointed to
  .not().isEmpty()
  .isLength({
      min: 3
  })
  .isAlpha(),

  //checks last Name
  check('lname', 'Last name is not valid. No special cases or numbers.')   // Second param is error message that if any check fails will be pointed to
  .not().isEmpty()
  .isLength({
      min: 3
  })
  .isAlpha(),

  // Checks Address
  check('faddy', 'Address is not valid.')   // Second param is error message that if any check fails will be pointed to
  .not().isEmpty()
  .isLength({
      min: 5
  }),

  //Checks email
  check('femail', 'Email is not valid')
  .isEmail(),

  // Checks phone number
  check('fphone', "Phone number isn't valid, must be US area code.")
  .not().isEmpty()
  .isInt()
  .isLength({
    min: 10,
    max: 10
  }),

  // Checks
] ,(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(422).json({
        erros: errors.array()
      });
    }
    // Need to send email if valid form
    res.status(202).json({
      success: 'ok'
    })
})



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
