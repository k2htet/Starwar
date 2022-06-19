import { Navbar, People, Planets } from "./components";
import { usePageContext } from "./context/PageContext";

const App = () => {
  const { page } = usePageContext();

  return (
    <>
      <div className="App">
        <h1>Star Wars</h1>
        <Navbar />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
    </>
  );
};

export default App;
