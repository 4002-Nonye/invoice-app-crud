import MobileInvoiceSummary from "./MobileInvoiceSummary";

function InvoiceSummary() {
  return (
    <div className="container-for-all mt-9 rounded-md p-7 shadow-md">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h2 className="text-xl font-bold text-darkblue-600">
            <span className="text-grey-100">#</span>XM9141
          </h2>
          <p className="text-grey-300">Graphic design</p>
        </div>

        <div className="my-7 font-medium text-grey-300 md:my-0 md:text-right">
          <p>19 union terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p>united kingdom</p>
        </div>
      </div>
      <div className="flex flex-col items-start md:flex-row md:space-x-24">
        <div className="flex w-full items-start justify-between md:w-[unset] md:flex-row md:space-x-24">
          <div className="flex flex-col justify-between space-y-12 capitalize">
            <div className="space-y-3">
              <h3 className="text-grey-500 font-medium">invoice date</h3>
              <p className="font-bold text-darkblue-600">21 Aug 2021</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-grey-500 font-medium">payment due</h3>
              <p className="font-bold text-darkblue-600">20 sep 2021</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-grey-500 font-medium">Bill To</h3>

            <p className="font-bold text-darkblue-600">Alex Grim</p>
            <div className="text-grey-500 text-left font-medium">
              <p>84 church way</p>
              <p>Bradford</p>
              <p>BD1 9PB</p>
              <p>united kingdom</p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-3 md:mt-0">
          <h3 className="text-grey-500 font-medium">Sent to</h3>
          <p className="font-bold text-darkblue-600">alexgrim@mail.com</p>
        </div>
      </div>

      <div className="text-grey-500 mt-14 flex  flex-col rounded-md bg-white-200 font-medium">
        <div className="hidden md:flex justify-between px-8 pb-5 capitalize">
          <p>item name</p>
          <div className="inline-flex items-start gap-20">
            <p className="list uppercase">qty.</p>
            <p className="list">price</p>
            <p className="list">total</p>
          </div>
        </div>

        <div className=" hidden md:block text-md h-28 overflow-scroll">
          {" "}
          <div className="px-8 pt-4">
            <div className="flex justify-between pb-4">
              <p className="font-bold text-lg text-darkblue-600">Banner design</p>
            
              <div className="inline-flex items-start gap-20">
                <p className="list">200</p>
                <p className="list">$6000</p>
                <p className="list font-bold text-lg text-darkblue-600">$1200000</p>
              </div>
            </div>
           
          </div>
        </div>
  <MobileInvoiceSummary/>
        <div className="mt-6 flex justify-between rounded-md bg-darkblue-500 p-8 text-lg font-bold text-white-300">
          <p>Amount Due</p>
          <p>$550.90</p>
        </div>
      </div>
    
    </div>
  );
}

export default InvoiceSummary;
