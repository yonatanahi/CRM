const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_intro')

router.get('/clients', function(req, res){
    sequelize
    .query("SELECT * FROM clients")
    .then(function (result) {
        res.send(result)
    })
})

// router.post('/transaction', function(req, res){
//     let transactionData = req.body    
//     let transaction = new Transaction(transactionData)
//     transaction.save()
//     res.send(transaction)
// })

// router.delete('/transaction', function(req, res){
//     id = req.body.id    
//     Transaction.deleteOne({ _id: id }, function(err, transaction){
//         res.send(`Transaction: ${id} was deleted`)
//     });

// })

module.exports = router




