package org.example.budgetmanagerapp.model;


import jakarta.persistence.*;

@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private int id;
    private double mantant;
    private String description;
    private String date;
    private String categorie;



    @ManyToOne
    @JoinColumn(name = "budget_id")
    private Budget budget;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getMantant() {
        return mantant;
    }

    public void setMantant(double mantant) {
        this.mantant = mantant;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
}