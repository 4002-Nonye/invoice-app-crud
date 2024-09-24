function MobileInvoiceSummary() {
    return (
        <div className="block md:hidden">
            <div className="flex items-center justify-between p-4">
                <div>
                    <h2 className="text-lg font-bold text-darkblue-600 dark:text-white-100">
                        Banner Design{' '}
                    </h2>
                    <p className="text-left font-medium text-grey-500 dark:text-white-200">
                        1 x $ 156.00
                    </p>
                </div>
                <p className="text-lg font-bold text-darkblue-600 dark:text-white-200">
                    $ 156.00
                </p>
            </div>
        </div>
    );
}

export default MobileInvoiceSummary;
