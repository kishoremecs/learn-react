import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let heading = "List from Props";
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading={heading}
  //       onSelectItem={handleSelectItem}
  //     ></ListGroup>
  //   </div>
  // );

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <h3>Hello Kishore</h3>
        </Alert>
      )}
      <Button
        buttonText="Click Me"
        color="primary"
        onClick={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
      ></Button>
    </div>
  );
}

export default App;
