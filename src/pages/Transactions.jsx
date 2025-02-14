import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const Transactions = () => {
  // Sample transaction data (Replace with API data in the future)
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setTransactions([
        { id: 1, date: "2024-02-10", amount: 2000, status: "Success" },
        { id: 2, date: "2024-02-11", amount: 1500, status: "Pending" },
        { id: 3, date: "2024-02-12", amount: 3000, status: "Failed" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-6 overflow-auto"
      >
        <h1 className="text-4xl font-semibold text-gray-800 mb-8">Transactions</h1>

        {loading ? (
          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse flex items-center space-x-4 p-4 bg-gray-200 rounded-md shadow-md"
              >
                <div className="w-32 h-6 bg-gray-300 rounded-md"></div>
                <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
                <div className="w-28 h-6 bg-gray-300 rounded-md"></div>
              </div>
            ))}
          </div>
        ) : transactions.length === 0 ? (
          <div className="text-center py-10 px-6 bg-white shadow-lg rounded-lg">
            <p className="text-lg text-gray-600">No transactions found.</p>
          </div>
        ) : (
          <div className="bg-white shadow-2xl rounded-lg p-6 overflow-hidden">
  <table className="w-full table-auto border-separate border-spacing-0">
    <thead>
      <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">Date</th>
        <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">Amount (₹)</th>
        <th className="p-4 text-left font-semibold text-sm uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((txn) => (
        <tr
          key={txn.id}
          className="border-b border-gray-200 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <td className="p-4 text-sm font-medium text-gray-700">{txn.date}</td>
          <td className="p-4 text-sm font-medium text-gray-700">₹{txn.amount}</td>
          <td
            className={`p-3 font-medium text-sm ${
              txn.status === "Success"
                ? "text-green-600 bg-green-100 rounded-md px-3 py-1"
                : txn.status === "Pending"
                ? "text-yellow-600 bg-yellow-100 rounded-md px-3 py-1"
                : "text-red-600 bg-red-100 rounded-md px-3 py-1"
            }`}
          >
            {txn.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        )}
      </motion.div>
    </div>
  );
};

export default Transactions;
