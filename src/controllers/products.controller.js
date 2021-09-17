import Product from "../models/Product";

export const createProduct = async (req, res) => {
     const {name, category, price, imgURL} = req.body

     const newProduct = new Product({name, category, price, imgURL});

     const productSaved = await newProduct.save()

     res.status(201).json(productSaved);
}

export const getProducts = async (req, res) => {
     const products = await Product.find();
      res.json(products);
}

export const getProductById = async (req, res) => {
     const product = await Product.findById(req.params.productsId);
     res.status(200).json(product);
}

export const updateProductById = async (req, res) => {
     const updateProduct = await Product.findByIdAndUpdate(req.params.productsId, req.body, {
          new: true
     })
     res.status(200).json(updateProduct);
}

export const deleteProductById = async (req, res) => {
     const deletedProduct = await Product.findByIdAndDelete(req.params.productsId)
     res.status(204).json();
}