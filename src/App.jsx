import { useState, useRef } from "react";
import { ItemLista,  } from "./Components/ItemLista";

function App() {
  const [listaMercado, setListaMercado] = useState([]);
  const inputAdd = useRef(null)


  const adicionarItem = () => {
    const novaLista = [...listaMercado];
    const valorInput = inputAdd.current.value;

    if (valorInput) {
      novaLista.push(valorInput);
  
      inputAdd.current.value = "";
  
      setListaMercado(novaLista);

    }

  };

  return (
    <>
    
      <div className="flex w-[500px] flex-col flex-wrap items-center rounded-lg p-10 backdrop-blur-sm my-[5%] mx-auto">
        <h1 className="text-[3rem] font-bold text-white">Lista de compras</h1>
        <div className="my-4 flex w-full gap-2 bg-transparent">
          <input
            type="text"
            placeholder="Digite um item"
            className="w-full rounded-[7px] border-3 border-transparent bg-white/50 p-2 text-[16px] font-bold text-gray-700 focus:outline-none"
            ref={inputAdd}
          />
          <button
            type="button"
            onClick={adicionarItem}
            className="cursor-pointer rounded-[7px] bg-blue-500 p-2 px-7 font-bold text-white hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>

      <div className="flex w-full text-center justify-center"> 
        {listaMercado.length > 0 ? (
          <ul className="flex w-full flex-col gap-2 pb-2">
            {listaMercado.map((itemlista, index) => (
              <ItemLista itemlista={itemlista} key={index} listaMercado={listaMercado} setListaMercado={setListaMercado} />
            ))}
          </ul>
        ) : (
          <p className=" justify-center text-center font-bold text-white">
            Você não tem nenhum item na lista
          </p>
        )}
      </div>
      </div>
    </>
  );
}
export default App;
