import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createInvoice as createInvoiceApi } from "../../services/apiInvoice";


export function useCreateInvoice() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: createInvoiceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
