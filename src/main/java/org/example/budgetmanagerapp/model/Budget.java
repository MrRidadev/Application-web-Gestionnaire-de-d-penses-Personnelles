package org.example.budgetmanagerapp.model;


import jakarta.persistence.*;
import lombok.Setter;


import java.util.List;

@Entity
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category;
    private Double limitAmount;
    private Double spentAmount;
    @Setter
    @OneToMany(mappedBy = "budget")
    private List<Transaction> transactionModels;


    public List<Transaction> getTransactions() {
        return transactionModels;
    }

    public void setTransactions(List<Transaction> transactionModels) {
        this.transactionModels = transactionModels;
    }

    public Budget() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getLimitAmount() {
        return limitAmount;
    }

    public void setLimitAmount(Double limitAmount) {
        this.limitAmount = limitAmount;
    }

    public Double getSpentAmount() {
        return spentAmount;
    }
    public void setSpentAmount(double ssp) {
        this.spentAmount = ssp;
    }


}
