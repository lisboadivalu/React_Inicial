import "./styles.css";
import Navbar from "./components/navbar/navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
        <li>Aprenderemos React</li>
        <li>Aprenderemos Component</li>
      </ul>
    </div>
  );
}
