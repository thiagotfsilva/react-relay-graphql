import { FormTransaction } from "@/components/FormTransaction";
import { Menu } from "@/components/Menu";
import { TransactionCard } from "@/components/TransactionCard";

export const Home = () => {
  return (
    <div className="container h-screen bg-zinc-300">
      <div className="grid grid-cols-12 h-full text-center">
        <div className="col-span-2 bg-zinc-300 border-r-2">
          <Menu />
        </div>
        <div className="col-span-7">
          <FormTransaction />
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
