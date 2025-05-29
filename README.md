# Flashcards
---
**Flashcards** — це простий API та фронтенд застосунок для створення та перегляду карток (flashcards). Дозволяє додавати картки з питаннями та відповідями, переглядати їх у вигляді інтерактивних карток, що перевертаються при кліку.

## Встановлення та запуск

1. Клонувати репозиторій: `git clone https://github.com/Svistaniuk/flashcards`
2. Запустити сервера:
   ```
   cd backend
   ```
   ```
   npm install
   ```
   ```
   nodemon server.js
   ```
3. Запустити frontend:
    ```
   cd frontend
   ```
   ```
   npm install
   ```
   ```
   npm run dev
   ```
4. Swagger-документація API доступна за адресою: `http://localhost:5000/api/cards`
```
## API Опис
---
### **Отримати всі картки**

```http
GET /api/cards
Відповідь:
[
    {
    "id": 1,
    "question": "Що таке React?",
    "answer": "Бібліотека для створення UI"
  }
]
### **Додати нову карткту**
- **POST** `/notes`
- **Тіло запиту (JSON):**
  ```
  [
    {
      "title": "Question",
      "content": "Answer"
    }  
  ]
  ```
- **Відповідь:**
  ```
  [
    {
      "id": 2,
      "title": "Question",
      "content": "Answer"
    }  
  ]
  ```

## Ліцензія 
---
Цей проєкт ліцензовано під **MIT License**. Деталі у [LICENSE](LICENSE.md).
# Автор 
---
**Свистанюк Назарій**
Email: ipz223_sno@student.ztu.edu.ua

GitHub: https://github.com/Svistaniuk