import Button from "./Button";

function DeletePrompt() {
  return (
    <div className="fixed z-30 flex flex-col left-0 right-0 top-1/4 mx-auto  rounded-md bg-white-200 py-9 pl-7 md:w-[26rem] w-72 pr-10 shadow-md">
      <h2 className="text-darkblue-600 font-bold mb-2 text-2xl">Confirm Deletion</h2>
      <p className="leading-6 mb-7 text-grey-500">
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>

      <div className="ml-auto flex gap-5 ">
        <Button type="discard">Cancel</Button>
        <Button type="delete">Delete</Button>
      </div>
    </div>
  );
}

export default DeletePrompt;
