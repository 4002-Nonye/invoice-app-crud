/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import arrowIcon from '../../assets/arrow-right.svg'

function InvoiceItem({ invoice }) {
  return (
    <Link
      to={`/invoice/${invoice.id}`}
      className="mt-6 flex cursor-pointer md:items-center justify-between rounded-md border-2 bg-white-200 p-3 md:p-6 shadow-sm transition duration-500 ease-linear hover:border-2 dark:bg-darkblue-300 hover:border-lightblue-300 dark:border-darkblue-300"
    >
      <div className="flex flex-col md:items-center  md:flex-row md:gap-10">
        <p className="mb-4 font-bold md:mb-0 text-darkblue-600 dark:text-white-200">
          <span className="text-lightblue-200 dark:text-grey-500">#</span>
          {invoice.id}
        </p>
        <p className="text-sm text-lightblue-100 dark:text-white-200">{invoice.dueDate}</p>
        <p className="hidden text-sm text-lightblue-100 dark:text-white-200 md:block">
          {invoice.name}
        </p>
        <p className="font-bold pt-2 text-darkblue-600 dark:text-white-200 md:hidden">
          ${invoice.amount}
        </p>
      </div>

      <div className="flex flex-col items-end md:items-center gap-5 md:flex-row md:gap-10">
        <p className="hidden font-bold text-darkblue-600 dark:text-white-200 md:block">
         ${invoice.amount}
        </p>
        <p className="text-sm dark:text-white-200 text-lightblue-100 md:hidden">{invoice.name}</p>
        <p
          className={`status ${invoice.status === "pending" ? "pending-status" : invoice.status === "draft" ? `draft-status ` : "paid-status"}`}
        >
          {invoice.status}
        </p>

        <img className="hidden md:block" src={arrowIcon} alt="icon" />
      </div>
    </Link>
  );
}

export default InvoiceItem;
