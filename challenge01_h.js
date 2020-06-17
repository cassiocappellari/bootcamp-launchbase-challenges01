const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance += transaction.value
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
    }
}

createTransaction({type: 'credit', value: 50})
createTransaction({type: 'credit', value: 120})
createTransaction({type: 'debit', value: 80})
createTransaction({type: 'debit', value: 30})

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
    let transactionsValue = 0
    for (let values of user.transactions) { 
        transactionsValue += values.value
    }
    return transactionsValue / user.transactions.length
}

function getTransactionsCount() {
    let transactionCount = {
        credit: 0,
        debit: 0
    }
    for (let types of user.transactions) {
        if (types.type == 'credit') {
            transactionCount.credit++
        } else {
            transactionCount.debit++
        }
    }
    return transactionCount
}

console.log(getTransactionsCount())