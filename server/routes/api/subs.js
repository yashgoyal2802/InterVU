const express = require("express");
const router = express.Router();
// Load Sub model
const Sub = require("../../models/sub");
// @route POST api/Subs/register
// @desc Register Sub
// @access Public
router.post("/addSub", (req, res) => {
        const newSub = new Sub({
          numberOfTechnicalRounds: req.body.numberOfTechnicalRounds,
          numberOfNonTechnicalRounds: req.body.numberOfNonTechnicalRounds,
          AverageDuration: req.body.AverageDuration,
          YourExpericence: req.body.YourExpericence,
          companyName: req.body.companyName,
        });
        newSub
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
});

router.get('/getSubs', function (req, res) {
  if (req.body.companyName==""||(!req.body.companyName)){
    Sub.find({}).lean().exec(function (err, subs) {
    console.log(subs);
    res.json(subs)
    });
   
  }
  else{
  Sub.find({companyName:req.body.companyName},{}).lean().exec(function (err, subs) {
   console.log(subs);
   res.json(subs)
  });
}
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
module.exports = router;
