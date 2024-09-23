/* eslint-disable react/prop-types */
import { useState } from "react";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { formatDate, generateId } from "../../utils/helpers";
import { useCreateInvoice } from "./useCreateInvoice";
import { useEditInvoice } from "./useEditInvoice";

import UserInput from "../user/UserInput";
import ClientInput from "../client/ClientInput";
import Calendar from "../../ui/Calendar";
import PaymentTerms from "../../ui/PaymentTerms";
import ItemList from "../items/ItemList";
import Cta from "../../ui/Cta";
import Description from "../../ui/Description";

function CreateEditInvoice({ setShowForm, invoiceToEdit = {} }) {
  // This is to get the current invoice that is to be edited and populating the form with the existing data
  const { id: editId, ...editValues } = invoiceToEdit;
  const [isMissingValue, setIsMissingValue] = useState(false);

  //  We use this to check if the form was opened for creating or
  //editing the invoice by determining if there is an ID when the edit button is clicked
  const isEditSession = Boolean(editId);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [itemsArr, setItemsArr] = useState(
    editValues.itemsArr || [{ name: "", id: uuidv4(), qty: "", price: "" }],
  );
  const [startDate, setStartDate] = useState(
    editValues.startDate || new Date(),
  );
  const [paymentTerm, setPaymentTerm] = useState(editValues.paymentTerm || 1);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { mutate: createInvoice, isLoading: isCreating } = useCreateInvoice();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { mutate: editInvoice, isLoading: isEditing } = useEditInvoice();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onSubmit(data) {
    // check if any value is missing
    const checkValue = data.itemsArr.some((item) => {
      const obj = Object.values(item);

      return obj.includes("") || obj.includes("0");
    });

    if (checkValue) {
      setIsMissingValue(checkValue);
      return;
    }

    const updatedData = {
      ...data,
      startDate: formatDate(startDate),
      paymentTerm,
      id: editId,
      status: "pending",
    };

    if (isEditSession) {
      editInvoice(updatedData, {
        onSuccess: () => {
          toast.success(`Invoice successfully edited`);
          setShowForm(false);
        },
      });
    } else {
      createInvoice(
        {
          ...data,
          startDate: formatDate(startDate),
          totalAmount: 8500,
          status: "pending",
          paymentTerm,
          invoiceId: generateId(),
        },
        {
          onSuccess: () => {
            toast.success("Invoice successfully created");
            reset();
            setShowForm(false);
          },
        },
      );
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { mutate: saveAsDraft, isLoading: isUpdating } = useCreateInvoice();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function handleDraft() {
    const currentFormValue = getValues();

    saveAsDraft(
      {
        ...currentFormValue,
        status: "draft",
        startDate: formatDate(startDate),
        paymentTerm,
        invoiceId: generateId(),
      },
      {
        onSuccess: () => {
          toast.success("Saved as draft");
          setShowForm(false);
        },
      },
    );
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // for developmental process
  function onError(err) {
    console.log(err);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function handleDiscard() {
    reset();
    setShowForm(false);
  }

  function handlePaymentTerms(term) {
    setPaymentTerm(term);
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
          <PaymentTerms
            paymentTerm={paymentTerm}
            handlePaymentTerms={handlePaymentTerms}
          />
        </div>
        <Description register={register} errors={errors} />
        <ItemList
          register={register}
          setValue={setValue}
          itemsArr={itemsArr}
          setItemsArr={setItemsArr}
          isMissingValue={isMissingValue}
        />
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
