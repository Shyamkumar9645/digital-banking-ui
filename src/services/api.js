const API_BASE_URL = 'http://localhost:8080/api';

export const fetchAccounts = async () => {
    const response = await fetch(`${API_BASE_URL}/accounts`);
    if (!response.ok) throw new Error('Failed to fetch accounts');
    return response.json();
};

export const fetchTransactions = async () => {
    const response = await fetch(`${API_BASE_URL}/transactions`);
    if (!response.ok) throw new Error('Failed to fetch transactions');
    return response.json();
};

export const transferFunds = async (fromAccountId, toAccountId, amount) => {
    const response = await fetch(`${API_BASE_URL}/transfer`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fromAccountId, toAccountId, amount }),
    });
    if (!response.ok) throw new Error('Transfer failed');
    return response.json();
};