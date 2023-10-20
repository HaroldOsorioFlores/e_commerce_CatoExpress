import { ConnectDataBase } from "@/lib/mongoose";
import { CholoProduct } from "@/models/products/choloProducts";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDataBase();
    const data = await CholoProduct.find();
    return Response.json(data);
  } catch (error) {
    return NextResponse.status(500).json({ error: error.message });
  }
};
