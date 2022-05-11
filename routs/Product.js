const express = require('express');
router = express.Router();
const {Product} = require('../models')

router.get("/", async (req,res)=>{
    const products =  await Product.findAll();
    res.json(products);
})
router.get("/byId/:id", async (req,res)=>{
    const id =req.params.id;
    const product = await Product.findByPk(id);
    res.json(product);
})
router.post("/delete" , async (req,res)=>{
    const id = req.body.id;
    await Product.destroy({
        where: {id:id}
    })
    res.json("done")
})
router.post("/" , async (req,res)=>{
    const product = req.body;
    await Product.create(product);
    res.json("done")
})


module.exports = router;