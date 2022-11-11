import { ReactNode } from "react";
import NavBar from "./navbar";

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}