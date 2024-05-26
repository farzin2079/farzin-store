import supabase from "./supabase";

export async function bannerApi() {
  const { data, error } = await supabase
    .from("banner")
    .select("*")
    .order("order");

  if (error) {
    console.error(error);
    throw new Error("banner can not be fetch");
  }

  return data;
}