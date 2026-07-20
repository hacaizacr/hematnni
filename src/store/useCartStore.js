import { create } from 'zustand';
import productsData from '../data/products.json'; // Simulación de DB

/**
 * Zustand Store for Cart and Products
 * 
 * NOTA DE ARQUITECTURA FINTECH:
 * - Actualmente fetchProducts lee del JSON local. 
 * - En el futuro, reemplazaremos la línea de carga por un fetch() a la API (Ej. Go/FastAPI).
 * - Para la sesión segura de pasarelas de pago, implementaremos middleware para que
 *   los Session Tokens JWT viajen en HTTPOnly Cookies interceptados en los requests de fetch.
 */
const useCartStore = create((set, get) => ({
  cart: [],
  products: [],
  isLoading: false,
  isCartOpen: false,

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  // Obtener productos desde la fuente (API o local)
  fetchProducts: async () => {
    set({ isLoading: true });
    
    // Simulamos latencia de red para demostrar la arquitectura asíncrona
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Aquí iría el fetch real: const res = await fetch('/api/v1/products');
    set({ products: productsData, isLoading: false });
  },

  // Añadir al carrito
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity }] };
    });
  },

  // Actualizar cantidad específica
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      cart: quantity === 0 
        ? state.cart.filter((item) => item.id !== productId)
        : state.cart.map((item) => item.id === productId ? { ...item, quantity } : item)
    }));
  },

  // Eliminar del carrito
  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  // Vaciar carrito
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
