import { ProductService } from "./productService";
import { Request, Response } from "express";
import productValidationSchema from "./productValidation";
// import { catchAsync } from "../../utils/catchAsync";

const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const zodParsedData = productValidationSchema.parse(req.body);
    const product = await ProductService.createProduct(zodParsedData);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await ProductService.updateProduct(req.params.id, req.body);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await ProductService.deleteProduct(req.params.id);
    if (!product) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
