import Items from "./Items";
import Button from '../ui/Button'

function ItemList() {
  const itemArray = [
    { id: 1, itemName: "", qty: 0, price: 0, total: 0 },
    {
      id: 2,
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    },
    {
      id: 3,
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    },
    {
      id: 4,
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    },
  ];
  const newItem = {
    id: 2,
    itemName: "",
    qty: 0,
    price: 0,
    total: 0,
  };
  return (
    <div className="relative pt-5">
      <h3 className="text-xl font-bold text-grey-100">Item List</h3>
      <div className="mb-4 md:flex w-full hidden justify-between">
        <p className="label">Item Name</p>
        <div className="inline-flex  gap-6">
          <p className="label w-16">Qty.</p>
          <p className="label w-24">Price</p>
          <p className="label w-20">Total</p>
        </div>
      </div>
      <div className="w-full overflow-y-auto h-48 md:h-24 pt-4">
        {itemArray.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </div>

      <Button type='add'>
+ Add Item
      </Button>
    </div>
  );
}

export default ItemList;
