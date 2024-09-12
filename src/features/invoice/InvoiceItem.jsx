/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import arrowIcon from "../../assets/arrow-right.svg";

function InvoiceItem({ invoice }) {
  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className="mt-6 flex cursor-pointer justify-between rounded-md border-2 bg-white-200 p-3 shadow-sm hover:border-2 hover:border-lightblue-300 md:items-center md:p-6 dark:border-darkblue-300 dark:bg-darkblue-300"
    >
      <div className="flex flex-col md:flex-row md:items-center md:gap-10">
        <p className="mb-4 font-bold text-darkblue-600 md:mb-0 dark:text-white-200">
          <span className="text-lightblue-200 dark:text-grey-500">#</span>
          XOZ{invoice.id}
        </p>
        <p className="text-sm text-lightblue-100 dark:text-white-200">
          {invoice.startDate}
        </p>
        <p className="hidden text-sm text-lightblue-100 md:block dark:text-white-200">
          {invoice.clientName || "______"}
        </p>
        <p className="pt-2 font-bold text-darkblue-600 md:hidden dark:text-white-200">
          ${invoice.totalAmount || "______"}
        </p>
      </div>

      <div className="flex flex-col items-end gap-5 md:flex-row md:items-center md:gap-10">
        <p className="hidden font-bold text-darkblue-600 md:block dark:text-white-200">
          ${invoice.totalAmount || " ______"}
        </p>
        <p className="text-sm text-lightblue-100 md:hidden dark:text-white-200">
          {invoice.clientName}
        </p>
        <p
          className={`status ${invoice.status === "pending" ? "pending-status" : invoice.status === "draft" ? `draft-status` : "paid-status"}`}
        >
          {invoice.status}
        </p>

        <img className="hidden md:block" src={arrowIcon} alt="icon" />
      </div>
    </Link>
  );
}

export default InvoiceItem;
