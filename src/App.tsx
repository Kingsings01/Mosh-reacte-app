import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"
import "./App.css"

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <NavBar />
      <Alert>
        Hello <span>Kings</span>
      </Alert>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </>
  )
};

export default App;