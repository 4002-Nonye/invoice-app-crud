/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from 'uuid';

import { useForm } from '../../context/FormContext';
import Button from '../../ui/Button';
import Error from '../../ui/Error';
import Items from './Items';

function ItemList({isMissingValue}) {
    const { register, itemsArr, handleAddItem } = useForm();

    const newObj = { name: '', id: uuidv4(), qty: '', price: '' };

    return (
        <>
            {' '}
            <div className="relative pt-5">
                <h3 className="text-xl font-bold text-grey-100">Item List</h3>
                <div className="mb-4 flex w-full items-center gap-7">
                    <p className="label w-64">Item Name</p>
                    <p className="label w-12">Qty.</p>
                    <p className="label w-20">Price</p>
                    <p className="label">Total</p>
                </div>

                <div className="h-48 w-full overflow-y-auto md:h-24">
                    {itemsArr.map((item) => (
                        <Items key={item.id} item={item} />
                    ))}
                    <input
                        type="hidden"
                        value={JSON.stringify(itemsArr)}
                        {...register('itemsArr')}
                    />
                </div>

                <Button
                    type="add"
                    btnFn="button"
                    onClick={() => handleAddItem(newObj)}
                >
                    + Add Item
                </Button>
            </div>
            {isMissingValue && (
                <Error>
                    <span>-All fields must be added</span>
                    <br />
                    <span>-An item must be added</span>
                </Error>
            )}
        </>
    );
}

export default ItemList;
