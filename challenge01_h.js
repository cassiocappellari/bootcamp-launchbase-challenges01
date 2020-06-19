const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sumValue = 0

    for (let values of user.transactions) {
        sumValue += values.value
    }

    const averageValue = sumValue / user.transactions.length
    return averageValue
}

function getTransactionsCount() {
    let transactionTypeCount = {credit: 0, debit: 0}

    for (let types of user.transactions) {
        if (types.type == 'credit') {
            transactionTypeCount.credit++
        } else {
            transactionTypeCount.debit++
        }
    }

    return transactionTypeCount
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())