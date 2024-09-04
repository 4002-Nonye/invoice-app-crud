import { useState } from "react";
import { useForm } from "react-hook-form";

import UserInput from "../features/user/UserInput";
import ClientInput from "../features/client/ClientInput";
import Calendar from "./Calendar";
import PaymentTerms from "./PaymentTerms";
import ItemList from "./ItemList";
import Cta from "./Cta";
import Description from "./Description";
import { formatDate } from "../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditInvoice } from "../services/apiInvoice";
import toast from "react-hot-toast";

function CreateEditInvoice({setShowForm}) {
  const queryClient = useQueryClient();
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [startDate, setStartDate] = useState(new Date());

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditInvoice,
    onSuccess: () => {
      toast.success("Invoice successfully created");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
      reset()
      setShowForm(false)
    },
    onError: (err) => toast.error(err.message),
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function onSubmit(data) {
    mutate({
      ...data,
      startDate: formatDate(startDate),
      status: "pending",
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function onError(err) {
    console.log(err);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="fixed bottom-0 left-0 top-0 z-40 h-full w-2/4 rounded-lg bg-white-200 px-5 pt-32 shadow-lg lg:pl-36 lg:pr-10 lg:pt-16 dark:bg-darkblue-500"
      action=""
    >
      <div className="flex h-full flex-col space-y-4 overflow-scroll pb-40">
        <h3 className="text-3xl font-bold dark:text-white-200">New invoice</h3>
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
        <Cta isCreating={isCreating}/>
      </div>
    </form>
  );
}

export default CreateEditInvoice;
