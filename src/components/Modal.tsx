import { useEffect, useRef } from 'react'

// interface ModalProps {
//   toggleModal: () => void
//   isOpenModal: boolean
// }

const Modal = ({ toggleModal }: { toggleModal: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null)
  console.log()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggleModal()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    modalRef.current?.querySelector('input')?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleModal])

  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
      <div className="relative flex h-full items-center justify-center p-4 z-5">
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="p-6 rounded-lg shadow-xl max-w-md w-full mx-4 bg-white text-gray-800 dark:bg-gray-800 dark:text-white"
        >
          <h3 id="modal-title" className="text-xl font-bold mb-4">
            Подтверждение удаления
          </h3>
          <p className="mb-6">стоп</p>
          <div className="flex justify-end gap-3">
            <input type="text" placeholder="введите текст" />
            <button
              onClick={toggleModal}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Отмена
            </button>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-[#3644b9] text-white rounded hover:bg-[#2d399c] transition-colors cursor-pointer"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
