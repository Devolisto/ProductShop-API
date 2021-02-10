
const {Product} = require("../db/models");
exports.productList = async (req, res) => {
    
    try {
      const products = await Product.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"]}
      });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.productCreate = async (req, res) => {

    try {
        const createProduct = await Product.create(req.body);
        res.status(201).json(createProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

exports.productDetails = async (req, res) => {

    try {
        const products = await Product.findByPk(req.params.productId);
        if(products) {
            res.status(200).json(products)
        } else {
             res.status(404).json({message: "Product is not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.productDelete = async (req, res) => {

    try {
        const products = await Product.findByPk(req.params.productId);
        if(products) {
            await products.destroy();
            res.status(204).end();
        } else {
             res.status(404).json({message: "Product is not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
     }
};

exports.productUpdate = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        if (product) {
            await product.update(req.body);
            res.status(204).json(product).end();
        } else res.status(404).json({ message: "Product is not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};