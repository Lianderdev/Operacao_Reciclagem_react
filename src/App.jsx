import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/button";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {Welcome} from "./pages/Welcome/index.jsx"


export function App() {
  return <>
    <h1>Operação Reciclagem</h1>
    <Button rounded={true}><IoIosArrowBack /></Button>
    <Button>Play</Button>
    <Welcome/>

  </>
}






