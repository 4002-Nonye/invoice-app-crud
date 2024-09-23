import { useQuery } from "@tanstack/react-query";

import { getInvoices } from "../../services/apiInvoice";

export function useInvoices() {
  const {
    isLoading,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  return { error, isLoading, invoices };
}
