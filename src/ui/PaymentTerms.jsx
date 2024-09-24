/* eslint-disable react/prop-types */
import { useState } from 'react';

import arrowDown from '../assets/arrow-down.svg';
import { useForm } from '../context/FormContext';
import { formatWord } from '../utils/helpers';

const paymentTermsArr = [
    { id: 1, day: 1 },
    { id: 2, day: 7 },
    { id: 3, day: 14 },
    { id: 4, day: 40 },
];

function PaymentTerms() {
    const { paymentTerm, handlePaymentTerms } = useForm();
    const [showPaymentTerms, setShowPaymentTerms] = useState(false);
    const spanStyle =
        'p-5 text-darkblue-600 transition-all duration-500 hover:text-lightblue-300 dark:text-white-100';
    return (
        <div
            className="relative w-full"
            onClick={() => setShowPaymentTerms((show) => !show)}
        >
            <h3 className="label">Payment Terms</h3>
            <div className="text-md input flex cursor-pointer justify-between rounded-sm border-darkblue-100 bg-darkblue-100 p-3 font-bold text-darkblue-600">
                <span>
                    {' '}
                    {`${paymentTerm} Net ${formatWord(paymentTerm, 'Day')}`}
                </span>

                <img src={arrowDown} alt="icon" />
            </div>

            {showPaymentTerms && (
                <div className="text-md absolute top-24 z-30 flex w-full cursor-pointer flex-col divide-y-[1px] rounded-md bg-white-100 font-bold shadow-md dark:divide-darkblue-600 dark:bg-darkblue-300">
                    {paymentTermsArr.map((terms) => (
                        <span
                            key={terms.id}
                            className={spanStyle}
                            onClick={() => handlePaymentTerms(terms.day)}
                        >
                            {` Net ${terms.day} ${formatWord(terms.day, 'day')}`}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PaymentTerms;
