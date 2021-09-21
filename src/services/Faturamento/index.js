import { URL_API } from "../base";

export async function ConsultarFaturamento() {
  const resp = await fetch(`${URL_API}/faturamento`);
  const data = await resp.json();
  return data;
}
