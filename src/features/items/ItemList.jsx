/* eslint-disable react/prop-types */
import Items from "./Items";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useInvoiceContext } from "../../context/InvoiceContext";

function ItemList() {
  const {
    register,
    setValue,
    setItemsArr,
    itemsArr,
    isMissingValue,handleAddItem
  } = useInvoiceContext()


  const newObj = { name: "", id: uuidv4(), qty: "", price: "" };



  
  const handleDeleteItem = (id) => {
    // if the user tries to delete all items (omo werey😂)
    if (itemsArr.length === 1) {
      toast.error("An item must be added");
      return;
    }
    const newItemArr = itemsArr.filter((item) => item.id !== id); // Filter out the item with matching id

    setItemsArr(newItemArr); // Update state with the new array

    setValue("itemsArr", newItemArr); // Use the updated array for form value
  };

  const handleInputChange = (id, field, value) => {
    const updatedItem = itemsArr.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      } else return item;
    });
    setItemsArr(updatedItem);

    setValue("itemsArr", updatedItem);
  };
  return (
    <>
      {" "}
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
            <Items
              key={item.id}
              item={item}
              handleDeleteItem={handleDeleteItem}
              handleInputChange={handleInputChange}
            />
          ))}
          <input
            type="hidden"
            value={JSON.stringify(itemsArr)}
            {...register("itemsArr")}
          />
        </div>

        <Button type="add" btnFn="button" onClick={()=>handleAddItem(newObj)}>
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
