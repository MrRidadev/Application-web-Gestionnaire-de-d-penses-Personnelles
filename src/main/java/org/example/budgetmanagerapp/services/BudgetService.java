package org.example.budgetmanagerapp.services;



import org.example.budgetmanagerapp.dto.BudgetDto;
import org.example.budgetmanagerapp.model.Budget;
import org.example.budgetmanagerapp.mapper.BudgetMapper;
import org.example.budgetmanagerapp.repository.BudgetRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BudgetService {
    private final BudgetRepository budgetRepository;
    private final BudgetMapper budgetMapper;
    BudgetService(BudgetRepository budgetRepository,BudgetMapper budgetMapper){
        this.budgetMapper = budgetMapper;
        this.budgetRepository = budgetRepository;
    }



    public Optional<Budget> getBudget(Long id) {
        return budgetRepository.findById(id);
    }
    public List<BudgetDto> getAllBudgets() {
        return budgetRepository.findAll().stream()
                .map(budgetMapper::toDto)
                .collect(Collectors.toList());
    }

    public BudgetDto createBudget(BudgetDto budgetDto) {
        Budget budget = budgetMapper.toEntity(budgetDto);
        return budgetMapper.toDto(budgetRepository.save(budget));
    }

    public BudgetDto updateBudget(Long id, BudgetDto updated) {
        Budget budget = budgetRepository.findById(id).orElseThrow();
        budget.setCategory(updated.getCategory());
        budget.setLimitAmount(updated.getLimitAmount());
        return budgetMapper.toDto(budgetRepository.save(budget));
    }

    public void deleteBudget(Long id) {
        budgetRepository.deleteById(id);
    }
}
