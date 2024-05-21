import { IProduct } from "./productInterface";
import { Product } from "./productModel";

const createProduct = async (product: IProduct): Promise<IProduct> => {
  return Product.create(product);
};

const getAllProducts = async (): Promise<IProduct[]> => {
  return Product.find();
};

const getProductById = async (id: string): Promise<IProduct | null> => {
  return Product.findById(id);
};

const updateProduct = async (
  id: string,
  product: IProduct
): Promise<IProduct | null> => {
  return Product.findByIdAndUpdate(id, product, { new: true });
};

const deleteProduct = async (id: string): Promise<IProduct | null> => {
  return Product.findByIdAndDelete(id);
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
