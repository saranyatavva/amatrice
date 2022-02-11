const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");
const User = mongoose.model("User");

router.post("/edit", requireLogin, (req, res) => {
  User.findByIdAndUpdate(req.user._id)
    .then((user) => {
      user.pic = req.body.photo;
      user.bio = req.body.bio;
      user.save();
      res.redirect("/mypost");
    })
    .catch((err) => {
      return res.status(422).json({ error: err });
    });
});

router.put("/updatepic", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $set: { pic: req.body.pic } },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: "pic canot post" });
      }
      res.json(result);
    }
  );
});

module.exports = router;
