import Items from "./Items";

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
      <div className="mb-4 flex items-start justify-between">
        <p className="w-[19rem]">Item Name</p>
        <div className="inline-flex items-start gap-6">
          <p className="w-16">Qty.</p>
          <p className="w-24">Price</p>
          <p className="w-20">Total</p>
        </div>
      </div>
      {itemArray.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
