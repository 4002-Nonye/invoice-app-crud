import supabase from './supabase';

export async function getInvoices() {
    const { data: invoices, error } = await supabase
        .from('invoices')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw new Error('Invoices could not be loaded');
    return invoices;
}

export async function createInvoice(invoice) {
    const { data: invoices, error } = await supabase
        .from('invoices')
        .insert([invoice])
        .select();

    if (error) throw new Error('Invoice could not be created');
    return invoices;
}

export async function getInvoiceById(id) {
    const { data: invoice, error } = await supabase
        .from('invoices')
        .select()
        .eq('invoiceId', id);

    if (error) throw new Error(`An error occured: ${error.message} `);
    return invoice;
}

export async function editInvoice(invoiceItem) {
    const { data: invoice, error } = await supabase
        .from('invoices')
        .update({ ...invoiceItem })
        .eq('invoiceId', invoiceItem.invoiceId)
        .select();

    if (error) throw new Error(error.message);
    return invoice;
}

export async function deleteInvoice(id) {
    const { error } = await supabase
        .from('invoices')
        .delete()
        .eq('invoiceId', id);
    if (error) throw new Error('Invoice could not be deleted');
}
