import { Link } from "react-router-dom";
const className =
  "rounded-full bg-sky-400 px-4 py-3 uppercase tracking-wide text-white transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-4";
function Button({ children, to }) {
  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return <button className={className}>{children}</button>;
}

export default Button;
