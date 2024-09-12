/* eslint-disable react/prop-types */
import MobileInvoiceSummary from "./MobileInvoiceSummary";

function InvoiceSummary({ invoice }) {
  
  const {
    id,
    productDescription,
    clientAddress,
    clientCity,
    clientCountry,
    clientEmail,
    clientName,
    clientPostcode,
    startDate,
    userAddress,
    userCity,
    userCountry,
    userPostcode,
  } = invoice[0];
  return (
    <div className="container-for-all mt-9 rounded-md p-7 shadow-md dark:bg-darkblue-400">
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h2 className="text-xl font-bold text-darkblue-600 dark:text-white-100">
            <span className="text-grey-100">#</span>XM{id}
          </h2>
          <p className="text-grey-300 dark:text-white-100">
            {productDescription || '______' }
          </p>
        </div>

        <div className="my-7 font-medium text-grey-300 md:my-0 md:text-right dark:text-white-100">
          <p>{userAddress || '______'}</p>
          <p>{userCity || '______'}</p>
          <p>{userPostcode|| '______'}</p>
          <p>{userCountry|| '______'}</p>
        </div>
      </div>
      <div className="flex flex-col items-start md:flex-row md:space-x-24">
        <div className="flex w-full items-start justify-between md:w-[unset] md:flex-row md:space-x-24">
          <div className="flex flex-col justify-between space-y-12 capitalize">
            <div className="space-y-3">
              <h3 className="font-medium text-grey-500 dark:text-white-100">
                invoice date
              </h3>
              <p className="text-lg font-bold text-darkblue-600 dark:text-white-100">
                {startDate}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-medium text-grey-500 dark:text-white-100">
                payment due
              </h3>
              <p className="text-lg font-bold text-darkblue-600 dark:text-white-100">
                20 sep 2021
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-grey-500 dark:text-white-100">
              Bill To
            </h3>

            <p className="text-lg font-bold text-darkblue-600 dark:text-white-100">
              {clientName || '______'}
            </p>
            <div className="text-left font-medium text-grey-500 dark:text-white-100">
              <p>{clientAddress || '______'}</p>
              <p>{clientCity || '______'}</p>
              <p>{clientPostcode|| '______'}</p>
              <p>{clientCountry|| '______'}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-3 md:mt-0">
          <h3 className="font-medium text-grey-500 dark:text-white-100">
            Sent to
          </h3>
          <p className="font-bold text-darkblue-600 dark:text-white-100">
            {clientEmail|| '______'}
          </p>
        </div>
      </div>

      <div className="mt-11 flex w-full flex-col rounded-md bg-white-200 pt-8 font-medium text-grey-500 dark:bg-darkblue-300">
        <div className="hidden justify-between px-8 pb-5 capitalize md:flex dark:text-white-200">
          <p>item name</p>
          <div className="inline-flex items-start gap-20">
            <p className="list uppercase">qty.</p>
            <p className="list">price</p>
            <p className="list">total</p>
          </div>
        </div>

        <div className="text-md hidden h-28 overflow-scroll md:block">
          {" "}
          <div className="px-8 pt-4">
            <div className="flex justify-between pb-4">
              <p className="text-lg font-bold text-darkblue-600 dark:text-white-200">
                Banner design
              </p>

              <div className="inline-flex items-start gap-20 dark:text-white-200">
                <p className="list">200</p>
                <p className="list">$6000</p>
                <p className="list text-lg font-bold text-darkblue-600 dark:text-white-200">
                  $1200000
                </p>
              </div>
            </div>
          </div>
        </div>
        <MobileInvoiceSummary />
        <div className="mt-6 flex justify-between rounded-md bg-darkblue-500 p-8 text-lg font-bold text-white-300">
          <p>Amount Due</p>
          <p className="text-2xl">$550.90</p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceSummary;
