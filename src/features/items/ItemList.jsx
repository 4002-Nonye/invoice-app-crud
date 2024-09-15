import Items from "./Items";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ItemList({ register ,setValue}) {
  const [itemsArr, setItemsArr] = useState([
    { name: "", id: uuidv4(), qty: "", price: "" },
  ]);
  const newObj = { name: "", id: uuidv4(), qty: "", price: "" };

  const handleAddItem = () => {
    setItemsArr([...itemsArr, newObj]);
    setValue('itemsArr',itemsArr)
    console.log(itemsArr);
  };
  const handleDeleteItem = (id) => {
    console.log(id);
    const newItemArr = itemsArr.filter((item) => item.id !== id);
    setItemsArr(newItemArr);
 
  };

  const handleInputChange = (id, field, value) => {
    const updatedItem = itemsArr.map((item) => {
      if (item.id === id) return { ...item, [field]: value };
      else return item;
    });
    setItemsArr(updatedItem)

    setValue('itemsArr',itemsArr)
  };
  return (
    <>
      {" "}
      <div className="relative pt-5">
        <h3 className="text-xl font-bold text-grey-100">Item List</h3>
        <div className="mb-4 hidden w-full justify-between md:flex md:px-4 md:pt-3">
          <p className="label">Item Name</p>
          <div className="inline-flex gap-6">
            <p className="label w-16">Qty.</p>
            <p className="label w-24">Price</p>
            <p className="label w-20">Total</p>
          </div>
        </div>

        <div className="h-48 w-full overflow-y-auto px-4 md:h-24">
          {itemsArr.map((item) => (
            <Items
              key={item.id}
              register={register}
              item={item}
              handleDeleteItem={handleDeleteItem}
              handleInputChange={handleInputChange}
            />
          ))}
            <input type="hidden" value={JSON.stringify(itemsArr)}  {...register('itemsArr')}/>
        </div>

        <Button type="add" btnFn="button" onClick={handleAddItem}>
          + Add Item
        </Button>
      </div>
      {/* <Error>
        <span>-All fields must be added</span>
        <br />
        <span>-An item must be added</span>
      </Error> */}
    </>
  );
}

export default ItemList;
