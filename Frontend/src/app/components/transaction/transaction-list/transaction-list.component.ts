import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { Transaction } from '../../../models/transaction.model';
import {TransactionFormComponent} from '../transaction-form/transaction-form.component';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  imports: [
    TransactionFormComponent,
    CommonModule
  ],
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  selectedTransaction?: Transaction;
  showForm = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe(data => this.transactions = data);
  }

  selectTransaction(transaction: Transaction): void {
    this.selectedTransaction = {...transaction};
    this.showForm = true;
  }

  deleteTransaction(id?: number): void {
    if (!id) return;
    this.transactionService.deleteTransaction(id).subscribe(() => this.loadTransactions());
  }

  addNewTransaction(): void {
    this.selectedTransaction = undefined;
    this.showForm = true;
  }

  onFormSubmit(): void {
    this.showForm = false;
    this.loadTransactions();
  }

  onFormCancel(): void {
    this.showForm = false;
  }
}
