import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [user, setUser] = useState(null);

  // Load registered users on init
  useEffect(() => {
    const savedRegisteredUsers = localStorage.getItem('srikalyani_registered_users');
    if (savedRegisteredUsers) setRegisteredUsers(JSON.parse(savedRegisteredUsers));
    
    const savedUser = localStorage.getItem('srikalyani_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Load user-specific data when user changes
  useEffect(() => {
    const userId = user ? user.email : 'guest';
    const savedCart = localStorage.getItem(`srikalyani_cart_${userId}`);
    const savedFavorites = localStorage.getItem(`srikalyani_favorites_${userId}`);

    setCart(savedCart ? JSON.parse(savedCart) : []);
    setFavorites(savedFavorites ? JSON.parse(savedFavorites) : []);
  }, [user]);

  // Sync to localStorage
  useEffect(() => {
    const userId = user ? user.email : 'guest';
    localStorage.setItem(`srikalyani_cart_${userId}`, JSON.stringify(cart));
  }, [cart, user]);

  useEffect(() => {
    const userId = user ? user.email : 'guest';
    localStorage.setItem(`srikalyani_favorites_${userId}`, JSON.stringify(favorites));
  }, [favorites, user]);

  useEffect(() => {
    localStorage.setItem('srikalyani_registered_users', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('srikalyani_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('srikalyani_user');
    }
  }, [user]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFavorite = prev.find((item) => item.id === product.id);
      if (isFavorite) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const register = (userData) => {
    setRegisteredUsers((prev) => [...prev, userData]);
    setUser(userData);
  };

  const login = (email, password) => {
    const foundUser = registeredUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        user,
        registeredUsers,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleFavorite,
        register,
        login,
        logout,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
