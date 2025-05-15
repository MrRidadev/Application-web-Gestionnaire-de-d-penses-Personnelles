package org.example.budgetmanagerapp.repository;

import org.example.budgetmanagerapp.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BudgetRepository extends JpaRepository<Budget, Long> {
}

