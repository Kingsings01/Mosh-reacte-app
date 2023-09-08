import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = [
    "1. New York",
    "2. San Francisco",
    "3. Tokyo",
    "4. London",
    "5. Paris",
  ];
  let types = [
    "1. Toons",
    "2. Action",
    "3. Animation",
    "4. Series",
    "5. Horror",
  ];
  let genre = [
    "1. NollyWood",
    "2. Netflix",
    "3. BollyWood",
    "4. NetNaija",
    "5. Tv-Series",
  ];
  const firstName = "Kingsley";
  const surName = "Onuwa";
  const middleName = "Abu";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleSelectTypes = (types: string) => {
    console.log(types);
  };
  const handleSelectGenre = (genre: string) => {
    console.log(genre);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Alert>
          Hello {surName} {firstName} {middleName}
        </Alert>
        <p className="listGroup-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          molestiae tempore fugiat voluptatem alias totam, quibusdam eaque
          eveniet! Quibusdam tempora illum, eveniet necessitatibus sunt dolorum
          inventore. Iste libero molestias nobis!
        </p>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        <p className="listGroup-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          blanditiis, eos hic quam sit maiores assumenda impedit magni ullam,
          vitae id deleniti enim laudantium quae numquam fugit labore dolore at.
        </p>
        <ListGroup
          items={types}
          heading="Movie Type"
          onSelectItem={handleSelectTypes}
        />
        <p className="listGroup-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          ratione nihil voluptatum sint cupiditate laborum nesciunt! Corporis
          facilis sunt dicta, excepturi ut illum minima porro nostrum labore
          alias, fugit harum.
        </p>
        <ListGroup
          items={genre}
          heading="Genre"
          onSelectItem={handleSelectGenre}
        />
        <p className="listGroup-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          rerum id at dicta reiciendis. Atque, doloribus quam. Deserunt,
          aliquam! Sed quis velit repellendus error aut corporis blanditiis,
          fugit ab itaque.
        </p>
        <HomePage />
      </div>
    </>
  );
}

export default App;
