import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {loading && <Loader />}
      <div className=" overflow-auto">
        <main className="mx-auto my-10 max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
