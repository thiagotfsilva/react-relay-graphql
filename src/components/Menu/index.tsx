export const Menu = () => {
  return (
    <div className="flex flex-col h-full justify-around">
      <div className="">
        <p className="mb-4 cursor-pointer hover:text-yellow-700">Home</p>

        <p className="cursor-pointer  hover:text-yellow-700">Transação</p>
      </div>
      <div className=" cursor-pointer  hover:text-yellow-700">
        <p>logout</p>
      </div>
    </div>
  );
};
