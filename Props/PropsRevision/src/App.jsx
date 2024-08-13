import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./Components/ErrorMessage";
import CarsItems from "./Components/CarsItems";

function App(){
 let cars=["bmw","Audi","Benz","Ducati","Honda"];

 return( <>
 <h1>CARS</h1>
  <ErrorMessage items={cars}></ErrorMessage>
  <CarsItems items={cars}></CarsItems>
 </>
)};
export default App;