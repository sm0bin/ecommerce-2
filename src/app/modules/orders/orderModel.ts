import mongoose, { Schema } from "mongoose";
import { IOrder } from "./orderInterface";

const orderSchema: Schema<IOrder> = new mongoose.Schema({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Order = mongoose.model<IOrder>("Order", orderSchema);
