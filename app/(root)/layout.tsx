import { FC } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
};

export default RootLayout;
