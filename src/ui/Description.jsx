/* eslint-disable react/prop-types */

import Label from "./Label";

function Description({ register, errors }) {
  return (
    <>
      <Label
        label="Product Description"
        error={errors?.productDescription?.message}
        htmlFor="productDescription"
      />
     
        <input
          type="text"
          name="productDescription"
          id="productDescription"
          className={`input ${errors?.productDescription && "errorBorder"}`}
          {...register("productDescription", {
            required: "can't be empty!",
          })}
        />
     
    </>
  );
}

export default Description;
