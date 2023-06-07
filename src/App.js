import "./App.css";
//import Header from "./Header";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Create />}></Route>
      <Route path="/Read" element={<Read />}></Route>
      <Route path="/Update" element={<Update />}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;
