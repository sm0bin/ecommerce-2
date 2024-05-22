import { OrderService } from "./orderService";
import { Request, Response } from "express";
import orderValidationSchema from "./orderValidation";

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const zodParsedData = orderValidationSchema.parse(req.body);
    const order = await OrderService.createOrder(zodParsedData);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const email: string = req.query.email as string;
    let orders;
    if (email) {
      orders = await OrderService.getOrdersByEmail(email);
    } else {
      orders = await OrderService.getAllOrders();
    }

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// const getOrdersByEmail = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const orders = await OrderService.getOrdersByEmail(req.query.email);

//     res.status(200).json({
//       success: true,
//       message: "Orders fetched successfully",
//       data: orders,
//     });
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//       error: error,
//     });
//   }
// };

export const OrderController = {
  createOrder,
  getAllOrders,
  //   getOrdersByEmail,
};
