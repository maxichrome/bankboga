accounts = [{
    nickname: 'Personal Checking',
    number: '1337',
    balance: 1240.36,
},
{
    nickname: 'Standard Credit Card',
    number: '2579',
    balance: 2025.25,
},
{
    nickname: 'High-Interest Savings',
    number: '2580',
    balance: 3250.36,
},
{
    nickname: 'Fixed-Rate 5 Year Term CD',
    number: '9704',
    balance: 5000.00,
}]

transactions = [{
    description: 'APL*ITUNES.COM/BILL',
    amount: -50,
    date: new Date(2019, 10, 7),
    account: 0
},
{
    description: 'Dunkin\' Donuts',
    amount: -25,
    date: new Date(2019, 10, 4),
    account: 0
},
{
    description: 'Candy Crush',
    amount: -13.37,
    date: new Date(),
    account: 0
},
{
    description: `XFER FROM ACCT x${accounts[2].number}`,
    amount: 250,
    date: new Date(2019, 10, 1),
    account: 0
},
{
    description: 'Check Deposit',
    amount: 33.10,
    date: new Date(2019, 9, 20),
    account: 2
},
{
    description: 'Check #103 Withdrawal',
    amount: -1392.19,
    date: new Date(2019, 9, 16),
    account: 0
},
{
    description: 'QVC*SHOPPING/BILL',
    amount: -140.50,
    date: new Date(2019, 9, 10),
    account: 0
},
{
    description: 'Netflix',
    amount: -12.99,
    date: new Date(2019, 8, 25),
    account: 0
}]

transfers = [{
    origin: 2,
    destination: 0,
    amount: 250,
    date: new Date(2019, 10, 1)
},
{
    origin: 0,
    destination: 3,
    amount: 5000,
    date: new Date(2019, 7, 22)
}]

module.exports = (() => ({
    accounts,
    transactions,
    transfers
}))()