import { useAuthContext } from "@/hooks/useAuthContext";

export const Menu = () => {
  const { logout } = useAuthContext();
  return (
    <div className="flex flex-col h-full justify-around">
      <p className="cursor-pointer  hover:text-yellow-700">Transação</p>

      <div className=" cursor-pointer  hover:text-yellow-700">
        <p onClick={() => logout()}>logout</p>
      </div>
    </div>
  );
};
