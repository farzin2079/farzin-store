import supabase from "./supabase";

export async function navLinkApi() {
  const { data, error } = await supabase
    .from("navLink")
    .select("*")
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("NavLinks can not be fetch");
  }

  return data;
}
