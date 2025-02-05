import { GoAlert } from "react-icons/go";
import { Button } from "./components/button";
import { IoIosArrowBack } from "react-icons/io";

export function App() {
  return <>
    <h1>Operação Reciclagem</h1>
    <Button rounded={true}><IoIosArrowBack /></Button>
    <Button>Play</Button>
  </>
}