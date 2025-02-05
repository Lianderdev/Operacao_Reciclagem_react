import { Button } from "./components/button";
import { IoIosArrowBack } from "react-icons/io";
import { Title } from "./components/title";
import { Content } from "./components/content";

export function App() {
  return <>
  <Content> 
    <Title>Operação Reciclagem</Title>
    <Button rounded={true} color="red"><IoIosArrowBack /></Button>
    <Button>Play</Button>
  </Content>
  </>
}