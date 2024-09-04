import { useQuery } from "@tanstack/react-query";
import CreateNewInvoice from "../features/invoice/CreateNewInvoice";
import EmptyInvoice from "../features/invoice/EmptyInvoice";
import FilterInvoice from "../features/invoice/FilterInvoice";
import InvoiceItem from "../features/invoice/InvoiceItem";
import { getInvoices } from "../services/apiInvoice";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import CreateEditInvoice from "../ui/CreateEditInvoice";
import Overlay from "../ui/Overlay";

function Invoice() {
  const {
    isLoading,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  console.log(invoices);
  const status = "";

  const filteredInvoice = invoices?.filter((invoice) => {
    if (status === "") return invoice;
    return invoice.status === status;
  });

  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(true);
   
  }

  return (
    <>
      <div className="relative mt-20 flex w-full flex-col px-4 md:w-[unset] md:px-0 lg:mt-0">
        {" "}
        <div className="flex w-full items-start justify-between md:w-[42rem] lg:w-[45rem] dark:text-white-100">
          <div>
            <h1 className="text-3xl font-bold capitalize">invoices</h1>
            <p className="text-grey-200 dark:text-white-100">
              There {filteredInvoice?.length > 1 ? "are" : "is"}{" "}
              {filteredInvoice?.length || 0} {status === "" ? "total" : status}{" "}
              {filteredInvoice?.length > 1 ? "invoices" : "invoice"}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 md:gap-7">
            <FilterInvoice />
            <CreateNewInvoice handleShowForm={handleShowForm} />
          </div>
        </div>
        <div className="hide-scrollbar mt-4 max-h-[60vh] overflow-scroll md:mt-10 lg:mt-16">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {" "}
              {!filteredInvoice?.length ? (
                <EmptyInvoice />
              ) : (
                filteredInvoice.map((invoice) => (
                  <InvoiceItem invoice={invoice} key={invoice.id} />
                ))
              )}
            </>
          )}
        </div>
      </div>
      {showForm && <CreateEditInvoice setShowForm={setShowForm} />}
      {showForm && <Overlay />}
    </>
  );
}

export default Invoice;
