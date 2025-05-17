package org.example.budgetmanagerapp.controller;

import org.example.budgetmanagerapp.model.Transaction;
import org.example.budgetmanagerapp.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
@CrossOrigin(origins = "http://localhost:4200")
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping("/post")
    public Transaction postTransaction(@RequestBody Transaction transactionModel) {
        return transactionService.addTransaction(transactionModel);
    }

    @GetMapping("/")
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTransaction(@PathVariable long id) {
        transactionService.deleteTransaction(id);
    }

    @PutMapping("/update")
    public void updateTransaction(@RequestBody Transaction transactionModel) {
        transactionService.updateTransaction(transactionModel);
    }

}