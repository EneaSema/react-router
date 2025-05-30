import { Outlet } from "react-router-dom";

import Navbar from "../componets/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright Enea</footer>
    </>
  );
}
