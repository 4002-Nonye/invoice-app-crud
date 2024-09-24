/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';
import { useForm as defaultForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const FormContext = createContext();

const initialState = {
  editValues: {},
  isEditSession: false,
  itemsArr: [{ name: '', id: uuidv4(), qty: '', price: '' }],
  startDate: new Date(),
  paymentTerm: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FORM_SET_EDIT_VALUES':
      return {
        ...state,
        editValues: action.payload,
        isEditSession: true,
        itemsArr: action.payload.itemsArr || state.itemsArr,
        startDate: action.payload.startDate || state.startDate,
        paymentTerm: action.payload.paymentTerm || state.paymentTerm,
      };
    case 'FORM_PAYMENT_TERMS':
      return { ...state, paymentTerm: action.payload };
    case 'FORM_ADD_ITEM':
      return { ...state, itemsArr: [...state.itemsArr, action.payload] };
    case 'FORM_DELETE_ITEM':
      if (state.itemsArr.length <= 1) {
        return state;
      }

      return {
        ...state,
        itemsArr: state.itemsArr.filter((item) => item.id !== action.payload),
      };
    case 'FORM_ITEM_INPUT_CHANGE':
      return {
        ...state,
        itemsArr: state.itemsArr.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                [action.payload.field]: action.payload.value,
              }
            : item;
        }),
      };

    case 'FORM_HIDE':
      return { ...initialState };

    case 'FORM_CALENDAR':
      return { ...state, startDate: action.payload };
    default:
      throw new Error('action type unknown');
  }
}
////////////////////////////////////////////////////////////////////////////////////
const FormProvider = ({ children }) => {
  const [
    { editValues, isEditSession, itemsArr, startDate, paymentTerm },
    dispatch,
  ] = useReducer(reducer, initialState);

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
    setValue,
  } = defaultForm({
    defaultValues: {},
  });

  ////////////////////////////////////////////////////////////////////////////////////

  // Reset form when editValues change
  useEffect(() => {
    if (isEditSession) {
      reset(editValues);
    } else {
      reset({
        itemsArr: [{ name: '', id: uuidv4(), qty: '', price: '' }],
        startDate: new Date(),
        paymentTerm: 1,
      });
    }
  }, [editValues, isEditSession, reset]);

  ////////////////////////////////////////////////////////////////////////////////////
  const handleSetEditForm = (itemToEdit) =>
    dispatch({ type: 'FORM_SET_EDIT_VALUES', payload: itemToEdit });
  const handleShowForm = () => dispatch({ type: 'FORM_HIDE' });

  const handlePaymentTerms = (term) =>
    dispatch({ type: 'FORM_PAYMENT_TERMS', payload: term });

  const handleCalendar = (date) =>
    dispatch({ type: 'FORM_CALENDAR', payload: date });

  const handleAddItem = (newObj) => {
    dispatch({ type: 'FORM_ADD_ITEM', payload: newObj });
    setValue('itemsArr', [...itemsArr, newObj]);
  };

  const handleDeleteItem = (id) => {
    if (itemsArr.length <= 1) {
      toast.error('An item must be added');
      return;
    }
    dispatch({ type: 'FORM_DELETE_ITEM', payload: id });
    // update the form state after dispatching the delete action
    setValue(
      'itemsArr',
      itemsArr.filter((arr) => arr.id !== id),
    );
  };

  const handleItemInputChange = (id, field, value) => {
    dispatch({
      type: 'FORM_ITEM_INPUT_CHANGE',
      payload: { id, field, value },
    });
    const updatedArr = itemsArr.map((item) => {
      if (item.id === id) return { ...item, [field]: value };
      else return item;
    });
    setValue('itemsArr', updatedArr);
  };
  return (
    <FormContext.Provider
      value={{
        dispatch,
        handleSubmit,
        register,
        reset,
        getValues,
        errors,
        setValue,
        editValues,
        itemsArr,
        startDate,
        handleShowForm,
        handleAddItem,
        paymentTerm,
        handlePaymentTerms,
        handleCalendar,
        isEditSession,
        handleDeleteItem,
        handleItemInputChange,
        handleSetEditForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error('Can not use FormContext outside FormProvider');
  return context;
};

export { FormProvider, useForm };
