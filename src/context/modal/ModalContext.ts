'use client'
import { createContext } from 'react'

export type ModalContextType = {
  isOpenModal: boolean
  toggleModal: () => void
}

export const ModalContext = createContext<ModalContextType | null>(null)
