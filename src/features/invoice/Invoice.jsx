import CreateNewInvoice from "./CreateNewInvoice";
import EmptyInvoice from "./EmptyInvoice";
import FilterInvoice from "./FilterInvoice";
import InvoiceItem from "./InvoiceItem";

const invoices = [
  {
    id: "XM9141",
    dueDate: "20 Sep 2021",
    name: "Alex Grim",
    amount: "102.04",
    status: "pending",
  },
  {
    id: "XM9301",
    dueDate: "23 Sep 2021",
    name: "Mandy Grim",
    amount: "102.04",
    status: "pending",
  },
  {
    id: "BQ9301",
    dueDate: "23 Sep 2021",
    name: "Mandy Grim",
    amount: "102.04",
    status: "draft",
  },
  {
    id: "WG7301",
    dueDate: "23 Sep 2021",
    name: "Mandy Grim",
    amount: "102000.04",
    status: "paid",
  },
  {
    id: "XM9041",
    dueDate: "20 Sep 2021",
    name: "Alex Grim",
    amount: "102.04",
    status: "pending",
  },
  {
    id: "VG8769",
    dueDate: "23 Sep 2021",
    name: "Mandy Grim",
    amount: "102.04",
    status: "pending",
  },
  {
    id: "RT8709",
    dueDate: "23 Sep 2021",
    name: "Mandy Grim",
    amount: "102.04",
    status: "draft",
  },
  {
    id: "WG7351",
    dueDate: "23 Sep 2021",
    name: "Mandy Grim",
    amount: "102000.04",
    status: "paid",
  },
];

function Invoice() {
  const status = "";

  const filteredInvoice = invoices.filter((invoice) => {
    if (status === "") return invoice;
    return invoice.status === status;
  });

  return (
    <div className="mt-20 flex w-full flex-col px-4 md:w-[unset] md:px-0 lg:mt-0">
      {" "}
      <div className="flex dark:text-white-100 w-full items-start justify-between md:w-[42rem] lg:w-[45rem]">
        <div>
          <h1 className="text-3xl font-bold capitalize">invoices</h1>
          <p className="text-grey-200 dark:text-white-100 ">
            There {filteredInvoice.length > 1 ? "are" : "is"}{" "}
            {filteredInvoice.length} {status === "" ? "total" : status}{" "}
            {filteredInvoice.length > 1 ? "invoices" : "invoice"}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 md:gap-7">
          <FilterInvoice />
          <CreateNewInvoice />
        </div>
      </div>
      <div className="hide-scrollbar mt-4 max-h-[60vh] overflow-scroll md:mt-10 lg:mt-16">
        {!filteredInvoice.length ? (
          <EmptyInvoice />
        ) : (
          filteredInvoice.map((invoice) => (
            <InvoiceItem invoice={invoice} key={invoice.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default Invoice;
