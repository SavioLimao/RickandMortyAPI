import { useState, useEffect } from "react";
import "./App.css";
import CRT from "./Components/CRT";

export default function App() {
  const APIURL = "https://rickandmortyapi.com/api/character";

  return (
    <>
      <h1>
        Rick and Morty
        <br />
        Multiverse
      </h1>
      <CRT />
    </>
  );
}
