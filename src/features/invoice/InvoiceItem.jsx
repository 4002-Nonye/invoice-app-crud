/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function InvoiceItem({ invoice }) {
  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className="mt-6 flex cursor-pointer md:items-center justify-between rounded-md border-2 bg-white-200 p-3 md:p-6 shadow-sm transition duration-500 ease-linear hover:border-2 hover:border-lightblue-300"
    >
      <div className="flex flex-col md:items-center  md:flex-row md:gap-10">
        <p className="mb-4 font-bold md:mb-0">
          <span className="text-lightblue-200">#</span>
          {invoice.id}
        </p>
        <p className="text-sm text-lightblue-100">{invoice.dueDate}</p>
        <p className="hidden text-sm text-lightblue-100 md:block">
          {invoice.name}
        </p>
        <p className="font-bold pt-2 text-darkblue-600 md:hidden">
          ${invoice.amount}
        </p>
      </div>

      <div className="flex flex-col items-end md:items-center gap-6 md:flex-row md:gap-10">
        <p className="hidden font-bold text-darkblue-600 md:block">
         ${invoice.amount}
        </p>
        <p className="text-sm text-lightblue-100 md:hidden">{invoice.name}</p>
        <p
          className={`status ${invoice.status === "pending" ? "pending-status" : invoice.status === "draft" ? "draft-status" : "paid-status"}`}
        >
          {invoice.status}
        </p>
      </div>
    </Link>
  );
}

export default InvoiceItem;
