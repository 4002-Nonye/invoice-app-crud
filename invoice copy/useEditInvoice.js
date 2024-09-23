import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editInvoice as editInvoiceApi } from "../../services/apiInvoice";
import toast from "react-hot-toast";

export function useEditInvoice() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: editInvoiceApi,
    onSuccess: () => {
     queryClient.invalidateQueries({ queryKey: ["Invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isLoading };
}
