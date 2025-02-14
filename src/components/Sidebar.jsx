import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX, FiHome, FiDollarSign, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Improved animations
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      boxShadow: "6px 0px 20px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 80, damping: 18, duration: 0.5 },
    },
    closed: {
      x: -300,
      opacity: 0.5,
      boxShadow: "none",
      transition: { type: "spring", stiffness: 80, damping: 18, duration: 0.5 },
    },
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
    { name: "Transactions", path: "/transactions", icon: <FiDollarSign /> },
    { name: "Settings", path: "", icon: <FiSettings /> },
  ];

  return (
    <div className="relative">
      {/* Animated Mobile Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white bg-gray-700 p-3 rounded-full lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-500"
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="bg-gray-900 text-white h-screen p-6 w-64 fixed lg:relative lg:translate-x-0 shadow-lg transform will-change-transform"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Menu</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.08, boxShadow: "2px 4px 10px rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-lg font-medium duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-800 hover:text-gray-300"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
