const express = require('express');
router = express.Router();
const {Order,User, Product} = require("../models");



router.post('/', async (req, res) => {
    const order = req.body;
    await Order.create(order);
    res.json("done")
})

router.get('/', async (req, res) => {
    const orders = await Order.findAll();
    const Products= await Product.findAll();
    const users = await User.findAll();
    let list = []
    await orders.map(o => {
        Products.map(p=> {
            if(o.ProductId== p.id){
             users.map(u => {
                 if(o.UserId == u.id){
                    list.push({
                        order: o,
                        product: p ,
                        user: u
                    })
                 }
             })
            }
        })
    })
    res.json(list)
})

router.delete('/:id', async (req, res) => {
    const id =req.params.id;
     await User.destroy({where: {id:id}})
    res.json("done")
})
module.exports = router;
