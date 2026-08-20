"use client";

import { createContext, useContext, useState } from "react";

type Ctx = { member: boolean; setMember: (v: boolean) => void };
const DemoCtx = createContext<Ctx>({ member: false, setMember: () => {} });

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [member, setMember] = useState(false);
  return (
    <DemoCtx.Provider value={{ member, setMember }}>{children}</DemoCtx.Provider>
  );
}

export const useDemo = () => useContext(DemoCtx);
