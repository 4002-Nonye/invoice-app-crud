import { createContext, useContext } from 'react';

import { useForm } from './FormContext';

const InvoiceContext = createContext();

const initialState = {};

function reducer(state, action) {
    switch (action.type) {
        case 'value':
            return { ...state };

        default:
            throw new Error('action type unknown');
    }
}

const InvoiceProvider = ({ children }) => {
    return (
        <InvoiceContext.Provider value={{}}>{children}</InvoiceContext.Provider>
    );
};

const useInvoiceContext = () => {
    const context = useContext(InvoiceContext);
    if (context === undefined)
        throw new Error('Can not use InvoiceContext outside InvoiceProvider');
    return context;
};

export { useInvoiceContext, InvoiceProvider };
