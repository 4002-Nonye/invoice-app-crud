import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import InvoiceDetail from './pages/InvoiceDetail';
import Invoices from './pages/Invoices';
import AppLayout from './ui/AppLayout';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<Invoices />} />
                        <Route
                            path="/invoice/:id"
                            element={<InvoiceDetail />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position="top-center" />
        </QueryClientProvider>
    );
}

export default App;
