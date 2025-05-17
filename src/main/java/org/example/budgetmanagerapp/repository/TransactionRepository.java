package org.example.budgetmanagerapp.repository;


import org.example.budgetmanagerapp.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
