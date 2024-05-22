import { IOrder } from "./orderInterface";
import { Order } from "./orderModel";
import { updateProductStock } from "../products/productService";

const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  const session = await Order.startSession();
  session.startTransaction();
  try {
    await updateProductStock(orderData.productId, orderData.quantity);
    const order = await Order.create(orderData);
    await session.commitTransaction();
    session.endSession();
    return order;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getAllOrders = async (): Promise<IOrder[]> => {
  return Order.find();
};

const getOrdersByEmail = async (email: string): Promise<IOrder[]> => {
  return Order.find({ email });
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
