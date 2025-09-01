export function ItemLista({itemlista}) {
 
    
  return (
    <li className="w-full flex justify-between bg-gray-200 p-3 rounded-[7px] items-center hover:scale-105 transition-all">
      <p className="font-bold text-[20px] text-gray-700">{itemlista}</p>
      <button className="bg-[red] font-bold text-white px-10 py-2 rounded-[7px] cursor-pointer hover:bg-red-900">Remover</button>
    </li>
  );
}
