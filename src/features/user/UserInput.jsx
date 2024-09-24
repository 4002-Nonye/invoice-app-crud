/* eslint-disable react/prop-types */
import { useForm } from '../../context/FormContext';
import Box from '../../ui/Box';
import Label from '../../ui/Label';

function UserInput() {
    const { register, errors } = useForm();
    return (
        <>
            <h4 className="font-bold text-lightblue-300">Bill From</h4>

            <Label
                label="Street Address"
                error={errors?.userAddress?.message}
                htmlFor="userAddress"
            />
            <input
                type="text"
                name="userAddress"
                id="userAddress"
                className={`input ${errors?.userAddress && 'errorBorder'}`}
                {...register('userAddress', {
                    required: "can't be empty!",
                })}
            />

            <div className="gridDisplay pt-5">
                <Box label="City" error={errors?.userCity?.message}>
                    <input
                        type="text"
                        name="userCity"
                        id="userCity"
                        className={`input ${errors?.userCity && 'errorBorder'}`}
                        {...register('userCity', {
                            required: "can't be empty!",
                        })}
                    />
                </Box>

                <Box label="Post code" error={errors?.userPostcode?.message}>
                    <input
                        type="text"
                        name="userPostcode"
                        id="userPostcode"
                        className={`input ${errors?.userPostcode && 'errorBorder'}`}
                        {...register('userPostcode', {
                            required: "can't be empty!",
                        })}
                    />
                </Box>

                <Box label="Country" error={errors?.userCountry?.message}>
                    <input
                        type="text"
                        name="userCountry"
                        id="userCountry"
                        className={`input ${errors?.userCountry && 'errorBorder'}`}
                        {...register('userCountry', {
                            required: "can't be empty!",
                        })}
                    />
                </Box>
            </div>
        </>
    );
}

export default UserInput;
