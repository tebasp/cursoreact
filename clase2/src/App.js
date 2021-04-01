import Curso from "./Curso.jsx";
import Formulario from "./Formulario";
import "./styles/styles.scss";

const cursos = [
  {
    title: "Node",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 50,
    professor: "Esteban Palomeque",
  },
  {
    title: "Java Script",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 100,
    professor: "Tebas Palo",
  },
  {
    title: "Vue",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 600,
    professor: "Violeta Palomeque",
  },
  {
    title: "React",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 1,
    professor: "Janneth Fernandez",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <h1>This is the title</h1>
        <div className="row">
          {cursos.map((curso) => (
            <Curso
              title={curso.title}
              image={curso.image}
              price={curso.price}
              professor={curso.professor}
            />
          ))}
        </div>

        <div>
          <Formulario />
        </div>
      </div>
    </>
  );
}

export default App;
