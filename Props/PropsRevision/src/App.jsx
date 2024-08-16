import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import CarsItems from "./Components/CarsItems";
import Container from "./Components/Container";
import FoodItemInput from "./Components/FoodItemInput";
function App(){
 let cars=["bmw","Audi","Benz","Ducati","Honda"];

 return( 
 <>
 <Container>
 <h1 className="car-heading">CARS</h1>
  <ErrorMessage items={cars}></ErrorMessage>
  <FoodItemInput></FoodItemInput>
  <CarsItems items={cars}></CarsItems>
 </Container>
 <Container>
 <p>Above are the popular car brands</p>
 </Container>
 </>
)};
export default App;