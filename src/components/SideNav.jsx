import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/sideNavSlice';
import '../css/SideNav.css'; // Create a CSS file for styling the sidebar

const SideNav = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state.sideNavItems);
  const dispatch = useDispatch();

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // Expose openNav and closeNav functions via ref
  useImperativeHandle(ref, () => ({
    openNav
  }));

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const distinctProductsCount = new Set(items.map(item => item.id)).size;

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        {items.map((item, index) => (
          <div key={index} className="grid">
            <a href="#">
              {item.name} - ${item.price}
            </a>
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
            />
            <button onClick={() => handleRemoveItem(item.id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
          </div>
        ))}
        <div className="text-center footer text-white">
          Total Price: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
});

export default SideNav;
