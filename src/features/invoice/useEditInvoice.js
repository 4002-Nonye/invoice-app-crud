import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editInvoice as editInvoiceApi } from "../../services/apiInvoice";
import toast from "react-hot-toast";

export function useEditInvoice() {
  const queryClient = useQueryClient();
  const { mutate: editInvoice, isLoading: isEditing } = useMutation({
    mutationFn: editInvoiceApi,
    onSuccess: () => {
      toast.success(`Invoice successfully edited`);
      queryClient.invalidateQueries({ queryKey: ["Invoice"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editInvoice, isEditing };
}
