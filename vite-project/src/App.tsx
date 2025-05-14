import { useState, useEffect } from "react";
import "./App.css";
import CRT from "./Components/CRT";

export default function App() {
  const APIURL = "https://rickandmortyapi.com/api/character";
    const [CRTCards, setCRTCards] = useState([])
    useEffect(() => {
      fetch(APIURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCRTCards(data.results)
      })
    }, []);
  return (
    <>
      <h1>
        Rick and Morty
        <br />
        Multiverse
      </h1>
      {CRTCards.map((CRTCard) => (
        <CRT
        key={CRTCard.id} 
        pic={CRTCard.image} 
        name={CRTCard.name}
        status={CRTCard.status}
        species={CRTCard.species}
        origin={CRTCard.origin?.name}
        />

      ))}
    </>
  );
}
