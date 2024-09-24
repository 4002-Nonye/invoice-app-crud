import { useQuery } from '@tanstack/react-query';

import { getInvoiceById } from '../../services/apiInvoice';

export function useInvoice(id) {
    const {
        isLoading,
        error,
        data: invoice,
    } = useQuery({
        queryKey: ['Invoice'],
        queryFn: () => getInvoiceById(id),
    });

    return { isLoading, error, invoice };
}
