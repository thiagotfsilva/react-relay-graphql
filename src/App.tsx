import { TransactionCard } from "./components/TransactionCard";

function App() {
  return (
    <div className="container h-screen pt-4 px-3">
      <div className="grid grid-cols-12 h-full text-center">
        <div className="col-span-3">menu</div>
        <div className="col-span-6">main</div>
        <div className="col-span-3 border-2 rounded-sm p-1">
          <h3>Transações</h3>
          <div>
            <TransactionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
