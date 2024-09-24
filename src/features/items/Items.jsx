/* eslint-disable react/prop-types */
import { useForm } from '../../context/FormContext';

function Items({ item }) {
    const { name, qty, price, id } = item;
    const { handleDeleteItem, handleItemInputChange } = useForm();

    return (
        <div className="relative flex flex-col justify-between pb-3 font-bold md:flex-row md:pb-0">
            <label className="label md:hidden">Item Name</label>

            <div className="flex w-full items-center gap-7">
                <input
                    className="input my-5 w-64 text-darkblue-600 md:my-2"
                    type="text"
                    value={name}
                    onChange={(e) =>
                        handleItemInputChange(id, 'name', e.target.value)
                    }
                />

                <div className="flex flex-col">
                    <label className="label md:hidden">Qty.</label>
                    <input
                        id="itemQty"
                        className="input w-12 text-center text-darkblue-600"
                        type="number"
                        placeholder="0"
                        value={qty}
                        onChange={(e) =>
                            handleItemInputChange(id, 'qty', e.target.value)
                        }
                    />
                </div>

                <div className="flex flex-col">
                    <label className="label md:hidden">Price</label>
                    <input
                        className="input w-20 text-center text-darkblue-600"
                        type="number"
                        value={price}
                        placeholder="0.00"
                        onChange={(e) => {
                            handleItemInputChange(id, 'price', e.target.value);
                        }}
                    />
                </div>
                <div className="flex w-14 flex-col overflow-scroll">
                    <p className="label md:hidden">Total</p>
                    <p className="m-auto text-grey-100 md:p-0 dark:text-white-100">
                        {price <= 0 || qty <= 0 ? '' : (price * qty).toFixed(2)}
                    </p>
                </div>

                <div
                    className="absolute right-0 text-center"
                    onClick={() => {
                        handleDeleteItem(id);
                    }}
                >
                    <svg
                        width="13"
                        height="16"
                        viewBox="0 0 13 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="Combined Shape"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"
                            className="cursor-pointer fill-grey-200 transition-all duration-500 hover:fill-red-200"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Items;
