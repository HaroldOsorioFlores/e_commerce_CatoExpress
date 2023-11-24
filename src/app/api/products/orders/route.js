import { ConnectDataBase } from "@/lib/mongoose";
import { Orders } from "@/models/products/orders";

export const POST = async (request) => {
  try {
    await ConnectDataBase();
    const {
      idClient,
      nameClient,
      emailClient,
      products,
      quantity,
      priceTotal,
    } = await request.json();

    const ordersMongo = await Orders.create({
      idClient,
      nameClient,
      emailClient,
      products: products,
      quantity,
      priceTotal,
    });
    const saveOrders = ordersMongo.save();
    return Response.json({
      message: "Mensaje enviado con exito: ",
      saveOrders,
    });
  } catch (error) {
    return Response.json(error);
  }
};
