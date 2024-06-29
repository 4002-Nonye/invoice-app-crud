import Button from "../../ui/Button";

function DeleteInvoice() {
  return (
    <div>
      <h2>Confirm Deletion</h2>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>

      <div>
        <Button type="cancel">Cancel</Button>
        <Button type="delete">Delete</Button>
      </div>
    </div>
  );
}

export default DeleteInvoice;
