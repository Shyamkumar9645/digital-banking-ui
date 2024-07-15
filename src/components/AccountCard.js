import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from 'react-bootstrap';
import { DollarSign, CreditCard } from 'lucide-react';

const AccountCard = ({ account }) => (
    <Card className="shadow-lg rounded-lg">
        <CardHeader className="bg-gray-100 border-0">
            <CardTitle className="flex items-center text-xl font-bold">
                {account.user.username === 'shyam' ? <CreditCard className="mr-2 h-5 w-5" /> : <DollarSign className="mr-2 h-5 w-5" />}
                {account.accountHolderName}
            </CardTitle>
        </CardHeader>
        <CardBody className="text-center">
            <p className="text-2xl font-semibold">
                ${account.balance.toFixed(2)}
            </p>
        </CardBody>
    </Card>
);

export default AccountCard;
