 import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";



function FilterInvoice() {
   
  return (
    <div className="relative">
      <p className="inline-flex items-center gap-1 font-bold">
        Filter <span className="hidden md:block">by status</span>
        <span>
          <img src={arrowDown} alt="arrowIcon" className="cursor-pointer" />
        </span>
      </p>

      {/* <div className="absolute">
        <p>
          <input
          
            value="draft"
            type="checkbox"
            name="draft"
            id="draft"
          />{" "}
          Draft
        </p>
        <p>
          <input value="pending" type="checkbox" name="pending" id="pending" />{" "}
          Pending
        </p>
        <p>
          <input value="paid" type="checkbox" name="paid" id="paid" /> Paid
        </p>
      </div> */}
    </div>
  );
}

export default FilterInvoice;
