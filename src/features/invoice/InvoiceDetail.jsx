import Button from "../../ui/Button";
import arrowLeft from "../../assets/arrow-left.svg";
import InvoiceSummary from "./InvoiceSummary";
import DeletePrompt from "../../ui/DeletePrompt";

function InvoiceDetail() {
  return (
    <div className=" mt-20 flex w-[90%] flex-col pb-12 md:w-[45rem] lg:mt-[unset]">
      <Button
        type="link"
        className="mb-7 inline-flex items-center justify-start gap-3"
      >
        <img src={arrowLeft} alt="back icon" />
        <span className="font-bold transition duration-500 ease-linear hover:text-grey-200 dark:text-white-200">
          {" "}
          Go back
        </span>
      </Button>

      <div className="flex justify-between rounded-md dark:bg-darkblue-400  bg-white-100 p-5 shadow-md">
        <div className="inline-flex w-full items-center justify-between gap-7 md:w-[unset]">
          <p className="font-semibold capitalize text-grey-500">status</p>
          <p className="status pending-status">Pending</p>
        </div>

        <div className="hidden gap-5 md:flex">
          <Button type="edit">Edit</Button>
          <Button type="delete">Delete</Button>
          <Button type="paid">Mark as Paid</Button>
        </div>
      </div>

      <InvoiceSummary />

      <DeletePrompt />
    </div>
  );
}

export default InvoiceDetail;


// handle hover states for dark mode element