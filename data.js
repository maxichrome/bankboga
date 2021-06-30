accounts = [{
    nickname: 'Personal Checking',
    number: '5487',
    balance: 15240.36,
},
{
    nickname: 'Standard Credit Card',
    number: '6854',
    balance: 2025.25,
},
{
    nickname: 'High-Interest Savings',
    number: '8732',
    balance: 73250.36,
},
{
    nickname: 'Fixed-Rate 5 Year Term CD',
    number: '1204',
    balance: 105000.00,
}]

transactions = [{
    description: 'APL*ITUNES.COM/BILL',
    amount: -50,
    date: new Date(),
    account: 0
},
{
    description: 'Dunkin\' Donuts',
    amount: -25,
    date: new Date(new Date() - (86,400,000*2)),
    account: 0
},
{
    description: 'Candy Crush',
    amount: -13.37,
    date: new Date(new Date() - (86,400,000*3)),
    account: 0
},
{
    description: `XFER FROM ACCT x${accounts[2].number}`,
    amount: 250,
    date: new Date(new Date() - (86,400,000*5)),
    account: 0
},
{
    description: 'Check Deposit',
    amount: 33.10,
    date: new Date(new Date() - (86,400,000*6)),
    account: 2
},
{
    description: 'Check #1053 Withdrawal',
    amount: -1392.19,
    date: new Date(new Date() - (86,400,000*6)),
    account: 0
},
{
    description: 'QVC*SHOPPING/BILL',
    amount: -140.50,
    date: new Date(new Date() - (86,400,000*7)),
    account: 0
},
{
    description: 'Netflix',
    amount: -12.99,
    date: new Date(new Date() - (86,400,000*8)),
    account: 0
}]

transfers = [{
    origin: 2,
    destination: 0,
    amount: 250,
    date: new Date(new Date() - (86,400,000*2)),
},
{
    origin: 0,
    destination: 3,
    amount: 5000,
    date: new Date(new Date() - (86,400,000*6)),
}]

module.exports = (() => ({
    accounts,
    transactions,
    transfers
}))()