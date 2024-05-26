import supabase from "./supabase";

export async function productApi() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("product can not be fetch");
  }

  return data;
}
