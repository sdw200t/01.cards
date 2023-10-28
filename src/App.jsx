import Card from "./components/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Card
        title="Card title"
        content="Some quick example text to build on the card title and make up the
              bulk of the card's content."
      >
        <img
          src="https://w.forfun.com/fetch/8d/8d702cb4e83d9864094da50417817d7a.jpeg"
          className="card-img-top"
          alt=""
        />
      </Card>
      <Card
        title="Special title treatment"
        content="With supporting text below as a natural lead-in to additional
              content."
      />
    </>
  );
}

export default App;