import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import UserName from "../Features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-sky-900 bg-sky-500 px-5 py-3 ">
      <Link to="/">Fast React Pizza co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
