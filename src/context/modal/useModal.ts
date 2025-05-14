'use client'
import { useContext } from 'react'
import { ModalContext, type ModalContextType } from './ModalContext'

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal used without ModalProvider')
  return context
}
