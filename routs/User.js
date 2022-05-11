const express = require('express');
const {User} = require('../models')
const router= express.Router();

router.post("/", async (req, res) => {
    const user = req.body;
   const u= await User.create(user)
    res.json(u.id)
})
router.get("/byid/:id", async (req, res) => {
    const id =req.params.id;
    const u = await User.findOne({where: {id: id}})
    res.json(u);
})


module.exports = router;