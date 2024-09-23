import { useInvoiceContext } from "../../context/InvoiceContext";
import Box from "../../ui/Box";
import Label from "../../ui/Label";

/* eslint-disable react/prop-types */
function ClientInput() {
  const { register, errors } =useInvoiceContext()
  
  return (
    <>
      <h4 className="pt-7 font-bold text-lightblue-300">Bill To</h4>
      {/* CLIENT'S NAME  */}
      <Label
        label="Client's Name"
        error={errors?.clientName?.message}
        htmlFor="clientName"
      />
      <input
        type="text"
        name="clientName"
        id="clientName"
        className={`input ${errors?.clientName && "errorBorder"}`}
        {...register("clientName", {
          required: "can't be empty!",
        })}
      />

      {/* CLIENT'S EMAIL  */}
      <Label
        label="Client's Email"
        error={errors?.clientEmail?.message}
        htmlFor="clientEmail"
      />
      <input
        type="text"
        name="clientEmail"
        id="clientEmail"
        className={`input ${errors?.clientEmail && "errorBorder"}`}
        {...register("clientEmail", {
          required: "can't be empty!",
        })}
      />

      {/* CLIENT'S ADDRESS  */}
      <Label
        label="Client's Address"
        error={errors?.clientAddress?.message}
        htmlFor="clientAddress"
      />

      <input
        type="text"
        name="clientAddress"
        id="clientAddress"
        className={`input ${errors?.clientAddress && "errorBorder"}`}
        {...register("clientAddress", {
          required: "can't be empty!",
        })}
      />

      <div className="gridDisplay pt-5">
        <Box label="City" error={errors?.clientCity?.message}>
          <input
            type="text"
            name="clientCity"
            id="clientCity"
            className={`input w-full ${errors?.clientCity && "errorBorder"}`}
            {...register("clientCity", {
              required: "can't be empty!",
            })}
          />
        </Box>

        <Box label="Post code" error={errors?.clientPostcode?.message}>
          <input
            type="text"
            name="clientPostcode"
            id="clientPostcode"
            className={`input w-full ${errors?.clientPostcode && "errorBorder"}`}
            {...register("clientPostcode", {
              required: "can't be empty!",
            })}
          />
        </Box>

        <Box label="Country" error={errors?.clientCountry?.message}>
          <input
            type="text"
            name="clientCountry"
            id="clientCountry"
            className={`input w-full ${errors?.clientCountry && "errorBorder"}`}
            {...register("clientCountry", {
              required: "can't be empty!",
            })}
          />
        </Box>
      </div>
    </>
  );
}

export default ClientInput;