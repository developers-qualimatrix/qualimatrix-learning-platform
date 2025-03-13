import { useTheme } from "@/context/ThemeContext";
import React from "react";

// function LinearBorder({ children }: { children: React.ReactNode }) {
//   const { theme } = useTheme();
//   return <div className={`linear-border ${theme}-theme`}>{children}</div>;
// }

// export default LinearBorder;

export const CardLinearBorder = ({
  children,
  borderRadius = 8,
}: {
  children: React.ReactNode;
  borderRadius?: number;
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`card-linear-border ${theme}-theme`}
      style={{ borderRadius: borderRadius + "px" }}
    >
      {children}
    </div>
  );
};

// export const LinearBorder2 = ({ children }: { children: React.ReactNode }) => {
//   const { theme } = useTheme();
//   return <div className={`linear-border-2 ${theme}-theme`}>{children}</div>;
// };
