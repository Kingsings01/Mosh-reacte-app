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
      <ListGroup items={items} heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello Kings
      </Alert>
    </>
  )
};

export default App;