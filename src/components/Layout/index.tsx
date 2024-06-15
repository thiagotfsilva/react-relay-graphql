import { FunctionComponent, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="container h-screen bg-zinc-300 flex items-center justify-center">
      {children}
    </div>
  );
};
