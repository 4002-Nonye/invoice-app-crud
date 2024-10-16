/* eslint-disable react/prop-types */
import { useState } from 'react';
import toast from 'react-hot-toast';

import { useForm } from '../../context/FormContext';
import Calendar from '../../ui/Calendar';
import Cta from '../../ui/Cta';
import Description from '../../ui/Description';
import PaymentTerms from '../../ui/PaymentTerms';
import { formatDate, generateId } from '../../utils/helpers';
import ClientInput from '../client/ClientInput';
import ItemList from '../items/ItemList';
import UserInput from '../user/UserInput';
import { useCreateInvoice } from './useCreateInvoice';
import { useEditInvoice } from './useEditInvoice';

function CreateEditInvoice({ setShowForm }) {
    const {
        editValues,
        handleSubmit,
        reset,
        getValues,
        startDate,
        handleShowForm,
        paymentTerm,
    } = useForm();

    //  We use this to check if the form was opened for creating or
    //editing the invoice by determining if there is an ID when the edit button is clicked
    const { id: editId, invoiceId } = editValues;
    const isEditSession = Boolean(editId);

    const [isMissingValue, setIsMissingValue] = useState(false);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const { mutate: createInvoice, isLoading: isCreating } = useCreateInvoice();

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const { mutate: editInvoice, isLoading: isEditing } = useEditInvoice();

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function onSubmit(data) {
        // check if any value is missing
        const checkValue = data.itemsArr.some((item) => {
            const obj = Object.values(item);

            return obj.includes('') || obj.includes('0');
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
            status: 'pending',
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
                    status: 'pending',
                    paymentTerm,
                    invoiceId: generateId(),
                },
                {
                    onSuccess: () => {
                        toast.success('Invoice successfully created');
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
        console.log(currentFormValue);

        saveAsDraft(
            {
                ...currentFormValue,
                status: 'draft',
                startDate: formatDate(startDate),
                paymentTerm,
                invoiceId: generateId(),
            },
            {
                onSuccess: () => {
                    toast.success('Saved as draft');
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
        handleShowForm();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="fixed bottom-0 left-0 top-0 z-40 h-full w-full md:w-3/4 lg:w-2/4 rounded-lg bg-white-200 px-5 pt-32 shadow-lg lg:pl-36 lg:pr-10 lg:pt-16 dark:bg-darkblue-500"
            action=""
        >
            <div className="flex h-full flex-col space-y-4 overflow-scroll pb-40">
                <h3 className="text-3xl font-bold dark:text-white-200">
                    {isEditSession ? `Edit #${invoiceId} ` : 'New invoice'}
                </h3>
                <UserInput />
                <ClientInput />
                <div className="flex w-full flex-col gap-10 pt-5 md:flex-row">
                    <Calendar />
                    <PaymentTerms />
                </div>
                <Description />
                <ItemList isMissingValue={isMissingValue} />
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
