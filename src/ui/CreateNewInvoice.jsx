/* eslint-disable react/prop-types */
import addIcon from "../assets/add.svg";
import Button from "./Button";

function CreateNewInvoice({ handleShowForm }) {
  return (
    <Button
      onClick={handleShowForm}
     type='new'
    >
      {" "}
      <span>
        <img src={addIcon} alt="addIcon" className="w-6" />
      </span>
      new<span className="hidden md:block">invoice</span>
    </Button>
  );
}

export default CreateNewInvoice;
