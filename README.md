# 💰 Budget Manager

 Application de gestion budgétaire personnelle pour enregistrer, suivre et optimiser vos finances.


## 🚀 Présentation

**Budget Manager** est une application web complète permettant à un utilisateur de :

- Gérer ses **transactionModels** (dépenses & revenus)
- Créer des **budgets** par catégorie (logement, transport, etc.)
- Définir ses **propres catégories**
- Suivre ses dépenses pour mieux contrôler ses finances


## 🛠️ Technologies

### Backend (Java / Spring Boot)

- Spring Boot
- Spring Data JPA
- Lombok
- MapStruct
- JUnit

### Frontend (Angular 16+)

- Angular CLI
- Angular Router
- Angular Forms (Template & Reactive)
- RxJS
- Bootstrap / CSS
- HttpClient


## 🧑‍💻 Fonctionnalités principales

### 🔄 Gestion des transactionModels

- ➕ Ajouter une transaction (montant, date, description, catégorie)
- 📋 Voir toutes les transactionModels
- ✏️ Modifier une transaction
- ❌ Supprimer une transaction
- 🔍 Filtrer / Trier par date, montant ou catégorie

### 📊 Gestion de budget

- ➕ Créer un budget par catégorie
- 📈 Suivre les dépenses par rapport au budget
- ✏️ Modifier un budget
- ❌ Supprimer un budget

### 🗂️ Gestion des catégories

- ➕ Créer une catégorie personnalisée
- ✏️ Modifier une catégorie
- ❌ Supprimer une catégorie


## 📸 Aperçu de l'interface (UI)


- 🎨 **UX optimisée** : Formulaires simples et validation en temps réel
- 📱 **Mobile friendly** : Interface adaptative
- 📈 **Visualisation claire** : Budgets & transactionModels bien organisés


## ⚙️ Lancement du projet

### Backend (Spring Boot)

```bash
# Cloner le dépôt
git clone https://github.com/MrRidadev/Budget-Manager-.git
cd budget-manager/backend

# Lancer l'application
./mvnw spring-boot:run
```

## 🧩 Conception UML
### 1. 📌 Diagramme de cas d'utilisation (Use Case)
Ce diagramme montre les interactions entre l’utilisateur et les principales fonctionnalités du système.

![image](https://github.com/user-attachments/assets/dd19363d-c254-4178-8d39-de4fbb960cd2)


### 2. 🧱 Diagramme de classes

![image](https://github.com/user-attachments/assets/ba68fd65-2b5b-4418-bd59-4235d63cac86)


### 3. 🔁 Diagramme de séquence (exemple : ajouter une transaction)

![image](https://github.com/user-attachments/assets/c780a4bb-4bb7-4a4c-8cdd-a6ee997f1a86)
