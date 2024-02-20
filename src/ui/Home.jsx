import CreateUser from "../Features/user/CreateUser";

function Home() {
  return (
    <div className="my-4 text-center space-y-3">
      <h1 className="mb-8 font-semibold text-xl">
        The best pizza.
        <br />
        <span className="text-sky-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
