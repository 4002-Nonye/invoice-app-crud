import addIcon from "../../assets/add.svg";
import Button from "../../ui/Button";

function CreateNewInvoice() {
  return (
    <p className="cursor-pointer capitalize flex items-center rounded-full gap-1.5 bg-lightblue-300 px-2 md:px-3 py-1.5 md:py-2 font-semibold text-white-200">
      {" "}
      <Button>
        <img src={addIcon} alt="addIcon" className="w-6" />
      </Button>
      new<span className="hidden md:block">invoice</span>
    </p>
  );
}

export default CreateNewInvoice;
