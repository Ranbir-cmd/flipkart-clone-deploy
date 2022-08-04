import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
  try {
    // checking if user already exist
    let exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "user already exist" });
    }
    // if not exist then create new user
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // checking if this user already signedup
    let user = await User.findOne({ email: email, password: password });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json("invalid login");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
