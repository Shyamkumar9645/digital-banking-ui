import React from 'react';
import AccountCard from './AccountCard';

const AccountList = ({ accounts }) => {
    return (
        <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Accounts</h2>
            <div className="grid grid-cols-1 gap-4">
                {accounts.map(account => (
                    <AccountCard key={account.id} account={account} />
                ))}
            </div>
        </div>
    );
};

export default AccountList;