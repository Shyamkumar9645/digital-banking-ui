import React from 'react';

const TransactionList = ({ transactions }) => (
    <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Transactions</h2>
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-600">Date</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Description</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Amount</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{new Date(transaction.date).toLocaleDateString()}</td>
                        <td className="p-3 text-gray-700">{transaction.description}</td>
                        <td className={`p-3 font-medium ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                            ${Math.abs(transaction.amount).toFixed(2)}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default TransactionList;