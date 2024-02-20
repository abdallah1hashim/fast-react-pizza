import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div>
      <Header />
      {loading && <Loader />}
      <main className="text-center">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
