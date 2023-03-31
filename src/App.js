import "./App.css";
import Movies from "./components/movies";
import NewMovie from "./components/newMovie";

function App() {
  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-3">
          <NewMovie />
        </div>
        <div className="col">
          <Movies />
        </div>
      </div>
    </main>
  );
}

export default App;
