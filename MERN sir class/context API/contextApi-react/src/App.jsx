import "./App.css";
import DataTest from "./components/DataTest";
import { UsersNameData } from "./ContextData";

function App() {
  return (
    <>
      <UsersNameData.Provider value="FAB sir">
        <h1>home page</h1>
        <DataTest />
      </UsersNameData.Provider>
    </>
  );
}

export default App;
