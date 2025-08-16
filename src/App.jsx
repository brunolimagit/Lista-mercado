import React from "react";
import { ItemLista } from "./Components/ItemLista";

function App () {
  const listaMercado = [" Banana", "Maça", "Carne", 'Uva'];
  return (
    <>
      <h1>Lista de Compras</h1>
      <input type="text" placeholder="Digite Um Item" className="flex" />
      <button type="button" className="bg-[blue]">
        Adicionar
      </button>

      <ul>
        {listaMercado.map((itemlista, index) =>(
          <ItemLista itemlista={itemlista} key={index} />
        ))}
      
      </ul>
    </>
  );
};

export default App;
