// import products from "/products";
let products = require("./products");
const express = require("express");
const db = require("./db/models");
const {Product} = require("./db/models");

const app = express();
app.use(express.json());

app.get("/products/:productId", (req, res) => {
    const foundProducts = products.find((product) => product.id === +req.params.productId);

    if(foundProducts) {
        res.json(foundProducts);
    } else {
        res.status(404).json({message: "the product is not found"});
    }
    
})

app.post("/products", (req, res) => {
    req.body.id = products[products.length -1].id + 1;
    products.push(req.body);
    res.status(201).json(req.body);
})

app.delete("/products/:productId", (req, res) => {
    products = products.filter((product) => product.id !== +req.params.productId);
    res.json({message: "the product has been deleted"}).status(204).end();
    // if(products) {
    //     res.status(204).json({message: "the product has been deleted"}).end();
    // } else {
    //     res.json({message: "the product has been deleted"}).end();    
    // }
    
})

app.get("/products", (req, res) => {
    res.json(products);
})


db.sequelize.sync();

app.get("/productList", async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"]}
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.listen(8000, () => {
    console.log("hey thereeeeeeee")
})