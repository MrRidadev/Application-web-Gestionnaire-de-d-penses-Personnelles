package org.example.budgetmanagerapp.mapper;

import org.example.budgetmanagerapp.dto.BudgetDto;
import org.example.budgetmanagerapp.model.Budget;
import org.springframework.stereotype.Component;

@Component
public class BudgetMapper {

    public BudgetDto toDto(Budget budget) {
        if (budget == null) {
            return null;
        }

        BudgetDto dto = new BudgetDto();
        dto.setId(budget.getId());
        dto.setCategory(budget.getCategory());
        dto.setLimitAmount(budget.getLimitAmount());
        dto.setSpentAmount(budget.getSpentAmount());
        return dto;
    }

    public Budget toEntity(BudgetDto dto) {
        if (dto == null) {
            return null;
        }

        Budget budget = new Budget();
        budget.setId(dto.getId());
        budget.setCategory(dto.getCategory());
        budget.setLimitAmount(dto.getLimitAmount());
        budget.setSpentAmount(dto.getSpentAmount());
        return budget;
    }
}

