/* eslint-disable react/prop-types */
import { useForm } from '../context/FormContext';
import Label from './Label';

function Description() {
    const { register, errors } = useForm();
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
                className={`input ${errors?.productDescription && 'errorBorder'}`}
                {...register('productDescription', {
                    required: "can't be empty!",
                })}
            />
        </>
    );
}

export default Description;
