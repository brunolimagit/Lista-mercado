import React from "react";
import { ItemLista } from "./Components/ItemLista";

function App() {
  const listaMercado = [" Banana", "Maça", "Carne", "Uva"];
  return (
    <div className="w-150 flex flex-col items-center mt- mx-auto p-4  rounded-lg   backdrop-blur-sm p-[40px]">
      <h1 className="text-[4rem] font-bold text-[white]">Lista de compras</h1>
      <div className="w-full flex gap-2 my-4 ">
        <input type="text" placeholder="Digite Um Item" className=" rounded-[7px] p-3 w-full bg-white/70 font-bold text-[20px] text-gray-700 border-3 border-transparent focus:outline-none" />
        <button type="button" className="bg-blue-500 text-white rounded-[7px] p-3 hover:bg-blue-700 cursor-pointer font-bold px-10">
          Adicionar
        </button>
      </div>

      <ul className="w-full flex flex-col justify-between gap-2">
        {listaMercado.map((itemlista, index) => (
          <ItemLista itemlista={itemlista} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
