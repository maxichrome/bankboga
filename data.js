accounts = [{
    nickname: 'Personal Checking',
    number: '1337',
    balance: 1240.36,
},
{
    nickname: 'AARP Platinum Credit Card',
    number: '2579',
    balance: 19001,
},
{
    nickname: 'High-Interest Savings',
    number: '2580',
    balance: -1240.36,
},
{
    nickname: 'Fixed-Rate War Bond',
    number: '9704',
    balance: 1240.36,
}]

transactions = [{
    description: 'APL*ITUNES.COM/BILL',
    amount: -50,
    date: new Date(2019, 6, 22),
    account: 0
},
{
    description: 'Dunkin\' Donuts',
    amount: -25,
    date: new Date(),
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
    amount: 200,
    date: new Date(),
    account: 0
},
{
    description: 'Cheque #103 Deposit',
    amount: 33.10,
    date: new Date(),
    account: 0
},
{
    description: 'Social Security',
    amount: 1392.19,
    date: new Date(),
    account: 2
},
{
    description: 'QVC*SHOPPING/BILL',
    amount: -140.50,
    date: new Date(),
    account: 0
},
{
    description: 'Netflix',
    amount: -12.99,
    date: new Date(),
    account: 0
}]

transfers = [{
    origin: 2,
    destination: 0,
    amount: 250,
    date: new Date()
},
{
    origin: 2,
    destination: 0,
    amount: 250,
    date: new Date()
},
{
    origin: 2,
    destination: 0,
    amount: 250,
    date: new Date()
}]

module.exports = (() => ({
    accounts,
    transactions,
    transfers
}))()