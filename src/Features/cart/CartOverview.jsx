import LinkButton from "../../ui/LinkButton";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-slate-900 p-4 py-6 text-sky-100">
      <p className="flex gap-3">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <LinkButton to="/cart">Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
