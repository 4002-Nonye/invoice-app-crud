import arrowLeft from "../assets/arrow-left.svg";
import InvoiceSummary from "../features/invoice/InvoiceSummary";
import DeletePrompt from "../ui/DeletePrompt";
import Button from "../ui/Button";
import CreateEditInvoice from "../features/invoice/CreateEditInvoice";
import Overlay from "../ui/Overlay";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editInvoice, getInvoiceById } from "../services/apiInvoice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import toast from "react-hot-toast";
import { useDeleteInvoice } from "../features/invoice/useDeleteInvoice";
import { useInvoice } from "../features/invoice/useInvoice";

function InvoiceDetail() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  ///////////////////////////////////////////////////////////////////////////////////////////////
  // use the current ID of invoice clicked to fetch details
  const { id } = useParams();

  ///////////////////////////////////////////////////////////////////////////////////////////////

  const { isLoading, invoice, error } = useInvoice(id);

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  const { mutate: markAsPaid, isUpdating } = useMutation({
    mutationFn: editInvoice,
    onSuccess: () => {
      toast.success("Invoice marked as paid");
      queryClient.invalidateQueries({
        queryKey: ["Invoice"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  // to mark invoice as paid
  function handleStatusUpdate(invoice) {
    markAsPaid({
      ...invoice,
      status: "paid",
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  const { isDeleting, deleteInvoice } = useDeleteInvoice();

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleDelete(id) {
    deleteInvoice(id, { onSuccess: () => navigate("/") });
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  if (isLoading || isUpdating) return <Spinner />;
  return (
    <>
      <div className="relative mt-20 flex w-[90%] flex-col pb-12 md:w-[45rem] lg:mt-[unset]">
        <Button
          type="link"
          to={-1}
          className="mb-7 inline-flex items-center justify-start gap-3"
        >
          <img src={arrowLeft} alt="back icon" />
          <span className="font-bold transition duration-500 ease-linear hover:text-grey-200 dark:text-white-200">
            {" "}
            Go back
          </span>
        </Button>

        <div className="flex justify-between rounded-md bg-white-100 p-5 shadow-md dark:bg-darkblue-400">
          <div className="inline-flex w-full items-center justify-between gap-7 md:w-[unset]">
            <p className="font-semibold capitalize text-grey-500">status</p>
            <p
              className={`status ${invoice[0].status === "pending" ? "pending-status" : invoice[0].status === "draft" ? `draft-status` : "paid-status"}`}
            >
              {invoice[0].status}
            </p>
          </div>

          <div className="hidden gap-5 md:flex">
            <Button onClick={() => setShowForm((show) => !show)} type="edit">
              Edit
            </Button>
            <Button onClick={() => handleDelete(id)} type="delete">
              Delete
            </Button>
            {invoice[0]?.status !== "draft" &&
              invoice[0]?.status !== "paid" && (
                <Button
                  type="paid"
                  onClick={() => handleStatusUpdate(invoice[0])}
                >
                  Mark as Paid
                </Button>
              )}
          </div>
        </div>

        {isLoading ? <Spinner /> : <InvoiceSummary invoice={invoice} />}

        {/* <DeletePrompt /> */}
      </div>

      {showForm && (
        <CreateEditInvoice
          invoiceToEdit={invoice[0]}
          setShowForm={setShowForm}
        />
      )}
      {showForm && <Overlay />}
    </>
  );
}

export default InvoiceDetail;

// handle hover states for dark mode element
