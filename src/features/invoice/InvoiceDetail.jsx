import Button from "../../ui/Button";
import arrowLeft from "../../assets/arrow-left.svg";
import InvoiceSummary from "./InvoiceSummary";

function InvoiceDetail() {
  return (
    <div className="flex w-[90%] md:w-[45rem] mt-20 lg:mt-[unset] pb-12 flex-col">
      <Button
        type="link"
        className="mb-7 inline-flex items-center justify-start gap-3"
      >
        <img src={arrowLeft} alt="back icon" />
        <span className="font-bold transition duration-500 ease-linear hover:text-grey-200">
          {" "}
          Go back
        </span>
      </Button>

      <div className="flex justify-between rounded-md bg-white-100 p-5 shadow-md">
        <div className="inline-flex w-full md:w-[unset] justify-between items-center gap-7">
          <p className="font-semibold capitalize text-grey-500">status</p>
          <p className="status pending-status">Pending</p>
        </div>

        <div className=" hidden md:flex gap-5">
          <Button type="edit">Edit</Button>
          <Button type="delete">Delete</Button>
          <Button type="paid">Mark as Paid</Button>
        </div>
      </div>

      <InvoiceSummary />
    </div>
  );
}

export default InvoiceDetail;
