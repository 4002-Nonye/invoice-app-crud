import arrowDown from "../assets/arrow-down.svg";

function PaymentTerms() {
  const spanStyle =
    "p-4 text-darkblue-600 transition-all duration-500 hover:text-lightblue-300";
  return (
    <div className="relative w-full">
      <h3 className="label">Payment Terms</h3>
      <div className="flex  cursor-pointer justify-between rounded-sm border-darkblue-100 bg-darkblue-100 p-3 text-lg font-bold text-darkblue-600 input">
        <span> 30 Net Days</span>

        <img src={arrowDown} alt="icon" />
      </div>
      {/* <div className="absolute top-24 flex w-full cursor-pointer flex-col divide-y-[1px] rounded-md bg-white-100 font-bold shadow-md">
        <span className={spanStyle}>Net 1 day</span>
        <span className={spanStyle}>Net 7 Days</span>
        <span className={spanStyle}>Net 14 Days</span>
        <span className={spanStyle}>Net 40 Days</span>
      </div> */}
    </div>
  );
}

export default PaymentTerms;
