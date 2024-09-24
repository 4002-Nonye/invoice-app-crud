import { useState } from 'react';

import CreateEditInvoice from '../features/invoice/CreateEditInvoice';
import EmptyInvoice from '../features/invoice/EmptyInvoice';
import FilterInvoice from '../features/invoice/FilterInvoice';
import InvoiceItem from '../features/invoice/InvoiceItem';
import { useInvoices } from '../features/invoice/useInvoices';
import CreateNewInvoice from '../ui/CreateNewInvoice';
import Overlay from '../ui/Overlay';
import Spinner from '../ui/Spinner';
import { formatWord } from '../utils/helpers';

function Invoices() {
  const { isLoading, invoices, error } = useInvoices();
  const [status, setStatus] = useState('');

  ///////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////
  const filteredInvoice = invoices?.filter((invoice) => {
    if (status === '') return invoice;
    return invoice.status === status;
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////
  const [showForm, setShowForm] = useState(false);
  ///////////////////////////////////////////////////////////////////////////////////////////////
  function handleShowForm() {
    setShowForm((show) => !show);
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="relative mt-20 flex w-full flex-col px-4 md:w-[unset] md:px-0 lg:mt-0">
        {' '}
        <div className="flex w-full items-start justify-between md:w-[42rem] lg:w-[45rem] dark:text-white-100">
          <div>
            <h1 className="text-3xl font-bold capitalize">invoices</h1>
            <p className="text-grey-200 dark:text-white-100">
              There {filteredInvoice?.length > 1 ? 'are' : 'is'}{' '}
              {filteredInvoice?.length || 0} {status === '' ? 'total' : status}{' '}
              {formatWord(filteredInvoice?.length, 'invoice')}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 md:gap-7">
            <FilterInvoice setStatus={setStatus} status={status} />
            <CreateNewInvoice handleShowForm={handleShowForm} />
          </div>
        </div>
        <div className="hide-scrollbar mt-4 max-h-[70vh] overflow-scroll md:mt-8">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {' '}
              {!filteredInvoice?.length ? (
                <EmptyInvoice />
              ) : (
                filteredInvoice.map((invoice) => (
                  <InvoiceItem invoice={invoice} key={invoice.id} />
                ))
              )}
            </>
          )}
        </div>
      </div>
      {showForm && <CreateEditInvoice setShowForm={setShowForm} />}
      {showForm && <Overlay />}
    </>
  );
}

export default Invoices;
