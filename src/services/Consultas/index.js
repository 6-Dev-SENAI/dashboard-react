import { URL_API } from "../base.js";

export default async function Consultar() {
  const resp = await fetch(`${URL_API}/consultas`);
  const data = await resp.json();
  return data;
}
