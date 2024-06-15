import { CardUserAndAccount } from "@/components/CardUserAndAccount";
import { FormTransaction } from "@/components/FormTransaction";
import { Menu } from "@/components/Menu";
import { TransactionCard } from "@/components/TransactionCard";
import { FIND_ACCOUNT, FIND_USER } from "@/graphql/queries";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { isAuthenticated, getTaxIdUser } = useAuthContext();
  const navigate = useNavigate();
  const taxId = getTaxIdUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(FIND_USER, {
    variables: { taxId: taxId },
  });

  const userId = userData?.userTaxId?._id;
  const username = userData?.userTaxId?.name;
  const userTaxId = userData?.userTaxId?.taxId;

  const {
    data: accountData,
    loading: accountLoading,
    error: accountError,
  } = useQuery(FIND_ACCOUNT, {
    variables: { userId: userId },
    skip: !userId, // Pular esta consulta se userId não estiver disponível
  });

  useEffect(() => {
    if (userError || accountError) {
      console.error("Erro ao buscar dados:", userError || accountError);
    }
  }, [userError, accountError]);

  if (userLoading || accountLoading) {
    return <div>Carregando...</div>;
  }

  if (!userId) {
    return <div>Erro: Usuário não encontrado</div>;
  }

  const balance = accountData?.accountById?.balance;
  const numberAccount = accountData?.accountById?.numberAccount;

  return (
    <div className="container h-screen bg-zinc-300">
      <div className="grid grid-cols-12 h-full text-center">
        <div className="col-span-2 bg-zinc-300 border-r-2">
          <Menu />
        </div>
        <div className="col-span-7 flex flex-col gap-4 overflow-y-auto p-4">
          <CardUserAndAccount
            name={username}
            balance={balance}
            taxId={userTaxId}
            numberAccount={numberAccount}
          />
          <FormTransaction userId={userId} />
        </div>
        <div className="col-span-3 border-l-2 rounded-sm p-2">
          <h3>Transações</h3>
          <div>
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
};
