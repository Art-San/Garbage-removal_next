'use client'
import { ReactNode, useState } from 'react'
import { ModalContext } from './ModalContext'

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const toggleModal = () => setIsOpenModal((prev) => !prev)

  return (
    <ModalContext.Provider value={{ isOpenModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}
