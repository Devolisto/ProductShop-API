const express = require("express");
const productRoutes = require("./routes/products")

const db = require("./db/models");

// const {Product} = require("./db/models");


const app = express();
app.use(express.json());
app.use("/products",productRoutes);



db.sequelize.sync({alter: true});
// db.sequelize.sync({force: true});

app.listen(8000, () => {
    console.log("hey thereeeeeeee")
})































// app.get("/products/:productId", (req, res) => {
//     const foundProducts = products.find((product) => product.id === +req.params.productId);

//     if(foundProducts) {
//         res.json(foundProducts);
//     } else {
//         res.status(404).json({message: "the product is not found"});
//     }
    
// })

// ALL PRODUCTS ROUTE
// app.get("/", async (req, res) => {
    
//     try {
//       const products = await Product.findAll({
//         attributes: { exclude: ["createdAt", "updatedAt"]}
//       });
//       res.status(200).json(products);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

// CREATE ROUTE
// app.post("/", async (req, res) => {

//     try {
//         const createProduct = await Product.create(req.body);
//         res.status(201).json(createProduct);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//     // req.body.id = products[products.length -1].id + 1;
//     // products.push(req.body);
//     // res.status(201).json(req.body);
// })

// // PRODUCT ROUTE
// app.get("/:productId", async (req, res) => {

//     try {
//         const products = await Product.findByPk(req.params.productId);
//         if(products) {
//             res.status(200).json(products)
//         } else {
//              res.status(404).json({message: "Product is not found"});
//         }
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// // DELETE ROUTE
// app.delete("/:productId", async (req, res) => {

//     try {
//         const products = await Product.findByPk(req.params.productId);
//         if(products) {
//             await products.destroy();
//             res.status(204).end();
//         } else {
//              res.status(404).json({message: "Product is not found"});
//         }
//     } catch (error) {
//         res.status(500).json({message: error.message});
//      }
// });

// // UPDATE ROUTE
// app.put("/:productId", async (req, res) => {
//     try {
//         const product = await Product.findByPk(req.params.productId);
//         if (product) {
//             await product.update(req.body);
//             res.status(204).json(product).end();
//         } else res.status(404).json({ message: "Product is not found" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//     });

    // products = products.filter((product) => product.id !== +req.params.productId);
    // res.json({message: "the product has been deleted"}).status(204).end();
    // // if(products) {
    // //     res.status(204).json({message: "the product has been deleted"}).end();
    // // } else {
    // //     res.json({message: "the product has been deleted"}).end();    
    // // }
    
// })

// app.get("/products", (req, res) => {
//     res.json(products);
// })

// app.get("/", async (req, res) => {
//     try {
//       const products = await Product.findAll({
//         attributes: { exclude: ["createdAt", "updatedAt"]}
//       });
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
