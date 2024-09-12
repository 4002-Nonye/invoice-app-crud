/* eslint-disable react/prop-types */
import toast from "react-hot-toast";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  createEditInvoice,
  editInvoice as editInvoiceApi,
} from "../services/apiInvoice";
import { formatDate } from "../utils/helpers";

import UserInput from "../features/user/UserInput";
import ClientInput from "../features/client/ClientInput";
import Calendar from "./Calendar";
import PaymentTerms from "./PaymentTerms";
import ItemList from "./ItemList";
import Cta from "./Cta";
import Description from "./Description";

function CreateEditInvoice({ setShowForm, invoiceToEdit = {} }) {
  const queryClient = useQueryClient();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // This is to get the current invoice that is to be edited and populating the form with the existing data
  const { id: editId, ...editValues } = invoiceToEdit;

  //  We use this to check if the form was opened for creating or
  //editing the invoice by determining if there is an ID when the edit button is clicked
  const isEditSession = Boolean(editId);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [startDate, setStartDate] = useState(new Date());

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully created");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
      reset();
      setShowForm(false);
    },
    onError: (err) => toast.error(err.message),
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: editInvoiceApi,
    onSuccess: () => {
      toast.success(`Invoice #XM${editId} successfully edited`);
      queryClient.invalidateQueries({ queryKey: ["Invoice"] });
      setShowForm(false);
    },
    onError: (err) => toast.error(err.message),
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onSubmit(data) {
    const updatedData = {
      ...data,
      startDate: formatDate(startDate),
      totalAmount: 8500,
      id: editId,
    };

    if (isEditSession) {
      editInvoice(updatedData);
    } else {
      mutate({
        ...data,
        startDate: formatDate(startDate),
        status: "pending",
        totalAmount: 8500,
      });
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { mutate: saveAsDraft, isUpdating } = useMutation({
    mutationFn: createEditInvoice,
    onSuccess: () => {
      toast.success("Saved as draft");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      setShowForm(false);
    },
    onError: (err) => toast.error(err.message),
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function handleDraft() {
    const currentFormValue = getValues();

    saveAsDraft({
      ...currentFormValue,
      status: "draft",
      startDate: formatDate(startDate),
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function onError(err) {
    console.log(err);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function handleDiscard() {
    reset();
    setShowForm(false);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="fixed bottom-0 left-0 top-0 z-40 h-full w-2/4 rounded-lg bg-white-200 px-5 pt-32 shadow-lg lg:pl-36 lg:pr-10 lg:pt-16 dark:bg-darkblue-500"
      action=""
    >
      <div className="flex h-full flex-col space-y-4 overflow-scroll pb-40">
        <h3 className="text-3xl font-bold dark:text-white-200">
          {isEditSession ? `Edit #XM${editId} ` : "New invoice"}
        </h3>
        <UserInput register={register} errors={errors} />
        <ClientInput register={register} errors={errors} />
        <div className="flex w-full flex-col gap-10 pt-5 md:flex-row">
          <Calendar startDate={startDate} setStartDate={setStartDate} />
          <PaymentTerms />
        </div>
        <Description register={register} errors={errors} />
        <ItemList />
      </div>

      <div className="sticky bottom-0 left-0 w-full bg-white-200 p-0 dark:bg-darkblue-500">
        <Cta
          isCreating={isCreating}
          discard={handleDiscard}
          isEditSession={isEditSession}
          handleDraft={handleDraft}
        />
      </div>
    </form>
  );
}

export default CreateEditInvoice;
