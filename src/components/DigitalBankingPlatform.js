import React, { useState, useEffect } from 'react';
import AccountList from './AccountList';
import TransferForm from './TransferForm';
import TransactionList from './TransactionList';
import { fetchAccounts, fetchTransactions, transferFunds } from '../services/api';

const DigitalBankingPlatform = () => {
    const [accounts, setAccounts] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [accountsData, transactionsData] = await Promise.all([
                    fetchAccounts(),
                    fetchTransactions()
                ]);
                setAccounts(accountsData);
                setTransactions(transactionsData);
            } catch (err) {
                setError('Failed to load data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const handleTransfer = async (fromAccount, toAccount, amount) => {
        try {
            await transferFunds(fromAccount, toAccount, amount);
            const [updatedAccounts, updatedTransactions] = await Promise.all([
                fetchAccounts(),
                fetchTransactions()
            ]);
            setAccounts(updatedAccounts);
            setTransactions(updatedTransactions);
        } catch (err) {
            setError('Transfer failed. Please try again.');
        }
    };

    if (loading) return <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
    if (error) return <div className="text-center text-red-500 mt-6">{error}</div>;

    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold text-center text-blue-600">Digital Banking Platform</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <AccountList accounts={accounts} />
                    <TransferForm accounts={accounts} onTransfer={handleTransfer} />
                </div>
                <div>
                    <TransactionList transactions={transactions} />
                </div>
            </div>
        </div>
    );
};

export default DigitalBankingPlatform;

