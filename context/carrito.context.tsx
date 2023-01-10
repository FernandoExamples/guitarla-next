import React, { useContext, useEffect } from 'react'
import { createContext, useState } from 'react'
import { CartItem } from '../entities/cartItem'

export type ContextType = {
  carrito: CartItem[]
  agregarCarrito: (guitarra: CartItem) => void
  deleteGuitarra: (guitarra: CartItem) => void
  updateQuantity: (guitarra: CartItem, quantity: number) => void
}

const CarritoContext = createContext<ContextType | null>(null)

export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {
  const carritoLocal = typeof window != 'undefined' ? localStorage.getItem('carrito') : null
  const [carrito, setCarrito] = useState<CartItem[]>(carritoLocal ? JSON.parse(carritoLocal) : [])

  useEffect(() => {
    const carritoJson = localStorage.getItem('carrito')
    if (!carritoJson) return

    setCarrito(JSON.parse(carritoJson))
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (guitarra: CartItem) => {
    if (carrito.some((x) => x.id == guitarra.id)) {
      const newCarrito = carrito.map((x) => {
        if (x.id == guitarra.id) x.cantidad = guitarra.cantidad
        return x
      })
      setCarrito(newCarrito)
    } else {
      setCarrito([...carrito, guitarra])
    }
  }

  const deleteGuitarra = (guitarra: CartItem) => {
    const newCarrito = carrito.filter((x) => x.id != guitarra.id)
    setCarrito(newCarrito)
  }
  const updateQuantity = (guitarra: CartItem, quantity: number) => {
    const newCarrito = carrito.map((x) => {
      if (x.id == guitarra.id) x.cantidad = quantity
      return x
    })
    setCarrito(newCarrito)
  }

  return (
    <CarritoContext.Provider value={{ carrito, agregarCarrito, deleteGuitarra, updateQuantity }}>
      {children}
    </CarritoContext.Provider>
  )
}

export const useCarritoContext = () => useContext(CarritoContext)!
