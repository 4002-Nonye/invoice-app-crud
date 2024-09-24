/* eslint-disable react/prop-types */
import { useState } from 'react';

import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';


function FilterInvoice({ setStatus, status }) {
  const [showStatus, setShowStatus] = useState(false);

  const statusOptions = ['draft', 'pending', 'paid'];
  return (
    <div className="relative">
   
      <p
        className="inline-flex cursor-pointer items-center gap-1 font-bold"
        onClick={() => setShowStatus((show) => !show)}
      >
        Filter <span className="hidden md:block">by status</span>
        <span>
          <img
            src={showStatus ? arrowUp : arrowDown}
            alt="arrowIcon"
            className="cursor-pointer"
          />
        </span>
      </p>

      {showStatus && (
        <div className="absolute left-[-3rem] top-9 z-10 flex w-48 flex-col rounded-md bg-white-200 p-5 font-bold shadow-lg dark:bg-darkblue-300">
          {statusOptions.map((option) => (
            <label key={option} className="cursor-pointer capitalize">
              <input
                onChange={() => {
                  setStatus((prevStatus) =>
                    prevStatus === option ? '' : option,
                  );
                }}
                className="checked"
                type="checkbox"
                name={option}
                id={option}
                checked={option === status}
              />{' '}
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterInvoice;
