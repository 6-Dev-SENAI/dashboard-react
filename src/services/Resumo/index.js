import { URL_API } from "../base.js";

export default async function Resumos() {
  const resp = await fetch(`${URL_API}/resumo`);
  const data = await resp.json();
  return data;
}
