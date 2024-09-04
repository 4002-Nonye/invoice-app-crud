import supabase from "./supabase";

export async function getInvoices() {
  const { data, error } = await supabase
    .from("invoices")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error("Invoices could not be loaded");
  return data;
}

export async function createEditInvoice(invoice) {
  const { data, error } = await supabase
    .from("invoices")
    .insert([invoice])
    .select();

  if (error) throw new Error("Invoice could not be created");
  return data;
}
