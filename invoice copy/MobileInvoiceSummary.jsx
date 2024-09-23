function MobileInvoiceSummary() {
  return (
    <div className="block md:hidden">
      <div className="flex items-center p-4 justify-between">
        <div>
          <h2 className="text-lg font-bold dark:text-white-100 text-darkblue-600">
            Banner Design{" "}
          </h2>
          <p className="text-grey-500 dark:text-white-200 text-left font-medium">1 x $ 156.00</p>
        </div>
        <p className="text-lg font-bold dark:text-white-200 text-darkblue-600">$ 156.00</p>
      </div>
    </div>
  );
}

export default MobileInvoiceSummary;
