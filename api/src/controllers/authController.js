const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../configs/mail.config");
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};

const register = async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();

    //JWT
    createSendToken(user, 200, res);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if email and password exist
    if ((!email, !password)) {
    }

    //check if user exist
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "false",
        message: "Incorrect email or password",
      });
    }

    //send token to client
    createSendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const protect = async (req, res, next) => {
  //get token and check if it's exist
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    console.log(token);

    if (!token) {
      return res.status(401).json({
        status: "false",
        message: "Please login to access",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const freshUser = await User.findById(decode.id);
    if (!freshUser) {
      return res.status(401).json({
        status: "false",
        message: "The user belonging to this token no longer exist",
      });
    }
    if (!freshUser.isVerify) {
      return res.status(401).json({
        status: "false",
        message: "Account is not verify",
      });
    }
    req.user = freshUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  //validate token

  //check if user still exist

  //check if user changed password after the token was issue
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "false",
        message: "You do not have permission to access this resource",
      });
    }

    next();
  };
};

const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        status: "false",
        message: "There is no account with this email",
      });
    }

    const resetToken = user.createPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/auth/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}.\nIf it's not your request, please ignore this email`;
    try {
      await sendEmail({
        email: user.email,
        subject: "Your password reset token (valid for 10 min)",
        message,
      });

      res.status(200).json({
        status: "success",
        message: "Token sent to email",
      });
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return res.status(500).json({
        status: "false",
        message: "There was an error, Try again later!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const resetPassword = async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  //get user base on token
  try {
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpire: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        status: "false",
        message: "Reset token is invalid or expired",
      });
    }
    // update password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;
    await user.save();
    //log in user, send JWT
    createSendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  //if token
};

const verifyAccount = (req, res) => {};

module.exports = {
  register,
  login,
  protect,
  restrictTo,
  forgotPassword,
  resetPassword,
  verifyAccount,
};
