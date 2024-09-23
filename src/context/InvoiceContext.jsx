/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const InvoiceContext = createContext();

const initialState = {
  editValues: {},
  isEditSession: false,
  itemsArr: [{ name: "", id: uuidv4(), qty: "", price: "" }],
  startDate: new Date(),
};

function reducer(state, action) {
  switch (action.type) {
    case "FORM_SET_EDIT_VALUES":
      return {
        ...state,
        editValues: action.payload,
        isEditSession: true,
        itemsArr: action.payload.itemsArr || [
          { name: "", id: uuidv4(), qty: "", price: "" },
        ],
        startDate: state.editValues.startDate || state.startDate,
      };

    case "FORM_ADD_ITEM":
      return { ...state, itemsArr: [...state.itemsArr, action.payload] };
    case "FORM_HIDE":
      return { ...initialState };
    default:
      throw new Error("action type unknown");
  }
}
////////////////////////////////////////////////////////////////////////////////////
const InvoiceProvider = ({ children }) => {
  const [{ editValues, isEditSession, itemsArr, startDate }, dispatch] =
    useReducer(reducer, initialState);

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {},
  });

  ////////////////////////////////////////////////////////////////////////////////////
 
  // Reset form when editValues change
  useEffect(() => {
    if (isEditSession) {
      reset(editValues); 
    } else {
      reset(initialState);
    }
  }, [editValues, isEditSession, reset]);

  ////////////////////////////////////////////////////////////////////////////////////

  const handleShowForm = () => dispatch({ type: "FORM_HIDE" });

  ////////////////////////////////////////////////////////////////////////////////////

  const handleAddItem = (newObj) => {
    dispatch({ type: "FORM_ADD_ITEM", payload: newObj });
    setValue("itemsArr", [...itemsArr, newObj]);
  };
  return (
    <InvoiceContext.Provider
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
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

const useInvoiceContext = () => {
  const context = useContext(InvoiceContext);
  if (context === undefined)
    throw new Error("Can not use InvoiceProvider outside InvoiceContext");
  return context;
};

export { InvoiceProvider, useInvoiceContext };
