import { model, models, Schema } from "mongoose";
import { mongoose } from "mongoose";

const OrdersSchema = new Schema(
  {
    idClient: { type: String, required: true },
    nameClient: { type: String, required: true },
    emailClient: { type: String, required: true },
    products: [
      {
        title: String,
        quantity: Number,
        price: mongoose.Decimal128,
      },
    ],
    quantity: { type: Number, required: true },
    priceTotal: { type: mongoose.Decimal128, required: true },
  },
  { timestamps: true }
);
export const Orders = models.Orders || model("Orders", OrdersSchema);
