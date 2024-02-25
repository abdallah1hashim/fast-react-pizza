import { Link, useNavigate } from "react-router-dom";

const className =
  "text-sm text-blue-500 hover:text-blue-700 hover:underline transition-all duration-300";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === -1)
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
