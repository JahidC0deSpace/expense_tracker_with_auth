const { fetchExpenses, deleteExpenses, addExpenses } = require('../Controllers/ExpenseController');


const router = require('express').Router();


//fetch all data 
router.get("/",fetchExpenses)


//add expense
router.post("/",addExpenses)

//delete expense
router.delete("/:expenseId",deleteExpenses)

module.exports = router;