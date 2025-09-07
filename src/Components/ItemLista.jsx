import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ItemLista({ itemlista, listaMercado, setListaMercado }) {
  const [openModal, setOpenModal] = useState(false);
  const [novoValor, setNovoValor] = useState(itemlista);

  // Abrir modal
  function handleOpenModalEdit() {
    setOpenModal(true);
  }

  // Fechar modal
  function handleCloseModal() {
    setOpenModal(false);
  }

  // Salvar edição
  function salvarEdicao() {
    const novaLista = listaMercado.map((item) =>
      item === itemlista ? novoValor : item
    );
    setListaMercado(novaLista);
    setOpenModal(false);
  }

  // Remover item
  const removerItem = () => {
    const novaListaFiltrada = listaMercado.filter((item) => item !== itemlista);
    setListaMercado(novaListaFiltrada);
  };

  return (
    <li className="flex w-full items-center justify-between rounded-[7px] bg-gray-200 p-1 transition-all hover:scale-105">
      <p className="ml-[10px] text-[16px] font-bold text-gray-700">{itemlista}</p>

      <div className="mr-[10px] flex gap-2">
        {/* Botão editar */}
        <button
          onClick={handleOpenModalEdit}
          className="cursor-pointer rounded-[7px] bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>

        {/* Botão deletar */}
        <button
          onClick={removerItem}
          className="cursor-pointer rounded-[7px] bg-red-600 px-4 py-2 text-[17px] font-bold text-white hover:bg-red-800"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-[400px] rounded bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Editar item</h2>

            <input
              type="text"
              value={novoValor}
              onChange={(e) => setNovoValor(e.target.value)}
              className="mb-4 w-full rounded border p-2"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={salvarEdicao}
                className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                Salvar
              </button>
              <button
                onClick={handleCloseModal}
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
