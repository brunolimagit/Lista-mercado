import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping, faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export function ItemLista({itemlista, listaMercado , setListaMercado}) {
 
    const removerItem = () => {
      const novaLista = [...listaMercado]
      const novaListaFiltrada = novaLista.filter((item) => item !== itemlista);
      setListaMercado(novaListaFiltrada)
    }
  return (
    <li className="w-full flex justify-between bg-gray-200 p-1 rounded-[7px] items-center hover:scale-105 transition-all">
      <p className="font-bold text-[16px] text-gray-700 ml-[10px]">{itemlista}</p>
      <div className="flex gap-2 mr-[10px]">
      <button className="bg-[green] font-bold text-white px-7 py-2 rounded-[7px] cursor-pointer hover:bg-green-900" >
        <FontAwesomeIcon icon={faPenToSquare} />
</button>
      <button className="bg-[red] font-bold text-white px-7 py-2 rounded-[7px] cursor-pointer hover:bg-red-900 text-[17px]" onClick={removerItem}> <FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </li>
  );
}

