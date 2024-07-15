import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import {fetchAccounts, fetchTransactions, transferFunds} from "../services/api";

const TransferForm = ({ accounts, onTransfer }) => {
    const [fromAccount, setFromAccount] = useState('1');
    const [toAccount, setToAccount] = useState('2');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onTransfer(fromAccount, toAccount, parseFloat(amount));
        setFromAccount('');
        setToAccount('');
        setAmount('');
    };



    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transfer Funds</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fromAccount">
                        From Account
                    </label>
                    <select
                        id="fromAccount"
                        value={fromAccount}
                        onChange={(e) => setFromAccount(e.target.value)}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Choose...</option>
                        {accounts.map((account) => (
                            <option key={account.fromAccountId} value={account.fromAccountId}>
                                {account.fromAccountId}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="toAccount">
                        To Account
                    </label>
                    <select
                        id="toAccount"
                        value={toAccount}
                        onChange={(e) => setToAccount(e.target.value)}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Choose...</option>
                        {accounts.map((account) => (
                            <option key={account.toAccountId} value={account.toAccountId}>
                                {account.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        min="0.01"
                        step="0.01"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                >
                    <RefreshCw className="mr-2 h-4 w-4" /> Transfer
                </button>
            </form>
        </div>
    );
};

export default TransferForm;