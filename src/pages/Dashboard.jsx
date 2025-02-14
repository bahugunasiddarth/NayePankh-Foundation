import { useState } from "react";
import { FiCopy, FiGift, FiMessageCircle } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const donationLink = "https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(donationLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 p-8 overflow-auto"
      >
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/qM1DBkCP/icon.png"
              alt="User"
              className="w-14 h-14 rounded-full border shadow-lg"
            />
            <p className="text-gray-700 font-semibold text-lg">Prashant Shukla</p>
          </div>
        </header>

        {/* Dashboard Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Goal Achieved */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all"
            >
              <p className="text-lg font-semibold text-gray-600">Goal Achieved</p>
              <p className="text-4xl font-semibold text-red-600">10</p>
            </motion.div>

            {/* Total Goal */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all"
            >
              <p className="text-lg font-semibold text-gray-600">Total Goal</p>
              <p className="text-4xl font-semibold text-green-600">₹30,000</p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-3 shadow-md transform transition-transform hover:bg-blue-700"
              onClick={() => window.open(donationLink, "_blank")}
            >
              <FiGift />
              <span>Donate</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={handleCopyLink}
              className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-3 shadow-md transform transition-transform hover:bg-blue-700"
            >
              <FiCopy />
              <span>Copy Donation Link</span>
            </motion.button>
          </div>

          {/* Reference Code */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 font-semibold text-lg">
              Reference Code: <span className="text-red-600 font-bold">PRA7432</span>
            </p>
          </div>

          {/* Share on WhatsApp */}
          <div className="mt-8 flex justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
              href={`https://wa.me/?text=Donate here: ${donationLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-md flex items-center space-x-3 shadow-md transform transition-transform hover:bg-green-700"
            >
              <FiMessageCircle />
              <span>Share on WhatsApp</span>
            </motion.a>
          </div>

          {/* Copy Link Notification */}
          {copySuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed bottom-8 right-8 bg-black text-white px-5 py-3 rounded-lg shadow-lg"
            >
              ✅ Link copied to clipboard!
            </motion.div>
          )}
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Dashboard;
