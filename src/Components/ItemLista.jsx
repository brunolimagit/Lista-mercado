export function ItemLista({itemlista}) {
 
    
  return (
    <li>
      <p>{itemlista}</p>
      <button className="bg-gray-300">Remover</button>
    </li>
  );
}
