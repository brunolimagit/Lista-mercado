import React from "react";
import { ItemLista } from "./Components/ItemLista";

function App() {
  const listaMercado = [" Banana", "Maça", "Carne", "Uva"];
  return (
    <div className="w-full max-w-96">
      <h1 className="text-3xl font-bold">Lista de Compras</h1>
      <div className="">
        <input type="text" placeholder="Digite Um Item" className="" />
        <button type="button" className="">
          Adicionar
        </button>
      </div>

      <ul>
        {listaMercado.map((itemlista, index) => (
          <ItemLista itemlista={itemlista} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
