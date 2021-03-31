import Curso from "./Curso.jsx";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <h1>This is the title</h1>
      <div className="container">
        <div className="row">
          <Curso />
          <Curso />
          <Curso />
          <Curso />
        </div>
      </div>
    </>
  );
}

export default App;
