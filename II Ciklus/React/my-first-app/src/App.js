import logo from "./logo.svg";
import "./App.css";
import Title from "./components/title/Title";
import Greeting from "./components/Greeting/Greeting";
import PersonCard from "./components/Card/PersonCard";

function App() {
  return (
    <div className="card-container">
      <PersonCard
        image={
          "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        name="Dzenan Kosuta"
        occupation="Okupacija"
      />
      <PersonCard
        image={
          "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        name="Dzenan Kosuta"
        occupation="Okupacija"
      />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <img src={logo} className="App-logo" alt="logo" />
//       <Title name="Dzenane" age={26} nekiProp={true} />
//       <Greeting name="Dzenane" fontSize="40px" fontColor="green">
//         <p>Ovaj paragraf je children</p>
//       </Greeting>
//       <p>Poceli smo sa Reactom</p>
//     </div>
//   );
// }
