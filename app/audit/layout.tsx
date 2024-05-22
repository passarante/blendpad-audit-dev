import React, { ReactNode } from "react";
import Navbar from "@/components/audit/Navbar";

export default function AuditLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full ">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
