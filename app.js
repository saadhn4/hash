import bcrypt from "bcryptjs";

async function hashing() {
  try {
    let userPass = "18271";
    let hashedPass = await bcrypt.hash(userPass, 10); //10 is salt value
    console.log(hashedPass);
  } catch (error) {
    console.log(error);
  }
}
hashing();
// output: $2a$10$DY9m.VJ6HnGwcu3JIGzpzuS2tdcv.eRbN7xsyZWlWIrgOrqPEn1fW
// $2a$ -> bcrypt version
// $10$ -> salt value
// rest is password

//$2a$10$qZDtPxXuPYCmu7/NYlTjRe76h.Z1XtU37IBfHwG.QRXkJE0avjaWy

async function verifyPassword() {
  try {
    let hashValue =
      "$2a$10$qZDtPxXuPYCmu7/NYlTjRe76h.Z1XtU37IBfHwG.QRXkJE0avjaWy";
    let userPass = "18271";
    let verify = await bcrypt.compare(userPass, hashValue); //password given should always be first.
    console.log(verify);
    if (verify) {
      console.log("Login succesful!");
    } else {
      console.log("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
  }
}
verifyPassword();
