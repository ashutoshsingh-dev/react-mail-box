import { Outlet } from "react-router";
import SiteHeader from "@/components/common/site-header";

export function AppLayout() {
  return (
    <>
      <SiteHeader />

      <main>
        <Outlet />
      </main>
    </>
  );
}
