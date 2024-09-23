import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteInvoice as deleteInvoiceApi } from "../../services/apiInvoice";

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  const { mutate: deleteInvoice, isLoading: isDeleting } = useMutation({
    mutationFn: deleteInvoiceApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
      toast.success("Invoice successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteInvoice, isDeleting };
}
