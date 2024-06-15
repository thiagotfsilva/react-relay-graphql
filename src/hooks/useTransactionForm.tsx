import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { TRANSACTION } from "@/graphql/mutations";

type TransactionData = {
  receiver: string;
  value: number;
};

export function useTransactionForm(userId: string) {
  const [CreateTransaction, { loading, error }] = useMutation(TRANSACTION);
  const transactionFormSchema = yup.object().shape({
    receiver: yup.string().required("Necessário informar um usuário"),
    value: yup.number().required("Necessário informar um valor"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TransactionData>({
    resolver: yupResolver(transactionFormSchema),
  });

  const onSubmit = async (formValues: TransactionData) => {
    try {
      await CreateTransaction({
        variables: {
          transaction: {
            sender: userId,
            receiver: formValues.receiver,
            value: formValues.value,
          },
        },
      });

      setValue("receiver", "");
      setValue("value", 0);
    } catch (error) {
      console.error("Erro na criação da transação:", error);
    }
  };

  if (loading) {
    console.log("Enviando transação...");
  }

  if (error) {
    console.error("Erro Apollo:", error);
  }

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
}
