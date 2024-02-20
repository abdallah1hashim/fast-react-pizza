import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
