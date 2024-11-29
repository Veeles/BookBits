# BookBits


**BookBits** is a project designed to consolidate the most important information from the books the user has read. Additionally, user have the option to view random quotes from notable figures. The project uses two separate APIs, one responsible for generating book covers, the other responsible for generating random quotes
## Features

- Add books along with their covers (powered by an API)
- Add notes to books
- Display random quotes from famous people (powered by an API)
- Users can add new books and notes
- Search for books using a search field with an autocomplete function
- Display all books with pagination support
- **Dynamic form feedback**: AJAX fetches server responses to indicate whether an operation was successful or failed, displaying the result directly in the add book form

## Technology
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Archiceture**: REST API 

## Installation

1. Clone the Repository and navigate to the project directory

```bash
  git clone git@github.com:Veeles/BookBits.git
  cd BookBits
```
2. Install Dependencies
```bash
  npm install
```

3. Make sure you have PostgreSQL (or your chosen database system) installed.

4. Create a new database

```sql
  Make sure you have PostgreSQL (or your chosen database system) installed.
  CREATE DATABASE database_name;

```

5. Run the following SQL queries to create the necessary tables:

```sql
  Make sure you have PostgreSQL (or your chosen database system) installed.
  CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    content TEXT
 );

```
6. Configure the database connection in your project’s configuration file - .env 
```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=database_name
    DB_USER=your_username
    DB_PASSWORD=your_password
```

7. Start the Application
```bash
  node main.js
```
The application should now be running at http://localhost:3000

## Screanshoots
![page1](https://github.com/user-attachments/assets/8f2f8a80-4dcf-4f18-a344-566b4b8e0b05)
![page2](https://github.com/user-attachments/assets/65efe750-6f70-4116-9a38-cabf86f76352)
![page3](https://github.com/user-attachments/assets/5cf660eb-0fd4-4b18-a6ad-b380b80758fc)
![page4](https://github.com/user-attachments/assets/ac0e9ef9-c68e-4e62-b7c9-87892fcef41c)
![page5](https://github.com/user-attachments/assets/e2a59962-0829-497f-9a43-f43bd73b0e2b)
![page6](https://github.com/user-attachments/assets/eda7ee6d-b075-4b0c-a4fd-5420488863cf)
![page8](https://github.com/user-attachments/assets/a37cf9cb-3a6a-4889-87c7-db93f5c2cfc0)
![page9](https://github.com/user-attachments/assets/c3dfb5e5-9fa3-4eef-800e-6f34007a77d4)
![page10](https://github.com/user-attachments/assets/912a7a17-e2f7-438d-8c9d-0703c706e5e4)
![page11](https://github.com/user-attachments/assets/43893fc4-5afc-47b2-8874-5195c7583b2d)
![page12](https://github.com/user-attachments/assets/01f6f2b3-2f0f-4cb7-90a6-fd1cec130c6e)
![page13](https://github.com/user-attachments/assets/f8c6e192-0220-430a-ad36-88490359a163)
![page15](https://github.com/user-attachments/assets/78727137-cb88-4924-aa2a-4082044e52ff)
![page16](https://github.com/user-attachments/assets/8b2c1efd-917d-4cea-ad6c-cdd2407a262e)










