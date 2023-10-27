import { ConnectDataBase } from "@/lib/mongoose";
import { CholoProduct } from "@/models/products/choloProducts";
import { CeprobisProduct } from "@/models/products/ceprobisProducts";
import { PanificadoraUcsmProduct } from "@/models/products/panificadoraProducts";
import { ComoEnCasaProduct } from "@/models/products/comoencasaProducts";

export async function getDataCholo(limitData) {
  await ConnectDataBase();
  const products = await CholoProduct.find().sort({ _id: -1 }).limit(limitData);
  return JSON.parse(JSON.stringify(products))
  ;
}
export async function getDataCeprobis(limitData) {
  await ConnectDataBase();
  const products = await CeprobisProduct.find().sort({ _id: -1 }).limit(limitData);
  return JSON.parse(JSON.stringify(products));
}

export async function getDataPanificadora(limitData) {
  await ConnectDataBase();
  const products = await PanificadoraUcsmProduct.find().sort({ _id: -1 }).limit(limitData);
  return JSON.parse(JSON.stringify(products));
}

export async function getDataComoEnCasa(limitData) {
  await ConnectDataBase();
  const products = await ComoEnCasaProduct.find().sort({ _id: -1 }).limit(limitData);
  return JSON.parse(JSON.stringify(products));
}
