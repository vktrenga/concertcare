import { check, param } from "express-validator";

export class UserValidation {
  static signUpValidation = () => {
    return [
      check("name").notEmpty().withMessage("first name is required"),
      check("emailId")
        .notEmpty()
        .withMessage("Email Id is required")
        .isEmail()
        .withMessage("Email Id not valid"),
      check("phoneNo").notEmpty().withMessage("Phone No is required"),
      check("password")
        .notEmpty()
        .withMessage("password is required")
        .isLength({ min: 8 })
        .withMessage("password must be 8 characters")
    ];
  };

  static loginValidation = () => {
    return [
      check("emailId")
        .notEmpty()
        .withMessage("Email Id is required")
        .isEmail()
        .withMessage("Email Id not valid"),
      check("password").notEmpty().withMessage("password is required"),
    ];
  };
}