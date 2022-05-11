express = require('express')
app = express();
const cors = require('cors')
const db =require('./models')
require("dotenv").config();
app.use(cors());
app.use(express.json());
const productRouter = require('./routs/Product');

app.use("/product", productRouter)
const userRouter = require('./routs/User');

app.use("/user", userRouter)

const orderRouter = require('./routs/Order')
app.use("/order", orderRouter)


db.sequelize.sync().then(()=>{
    app.listen( process.env.PORT || 3001, ()=>{
        console.log("server is running");
    })
}).catch((err)=>{
    console.log(err)
});
