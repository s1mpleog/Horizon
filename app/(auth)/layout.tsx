import { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
};

export default AuthLayout;
