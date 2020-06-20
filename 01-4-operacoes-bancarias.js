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
    let higherTransactionValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherTransactionValue) {
            higherTransactionValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let transactionsSum = 0

    for (let transactions of user.transactions) {
        transactionsSum += transactions.value
    }

    let getAverageTransaction = transactionsSum / user.transactions.length

    return getAverageTransaction
}

function getTransactionsCount() {
    let transactionsType = {credit: 0, debit: 0}

    for (let type of user.transactions) {
        if (type.type == 'credit') {
            transactionsType.credit++
        } else {
            transactionsType.debit++
        }
    }

    return transactionsType
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })