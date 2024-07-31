import Board from "./components/Board";

const App = () => {
  return (
    <div className="grid place-items-center">
      <h1 className=" my-5 text-4xl font-semibold">Tic Tac Toe</h1>
      <Board />
    </div>
  );
};

export default App;
