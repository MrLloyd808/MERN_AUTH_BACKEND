 # 📝 Blog API — Routes Documentation

## 🔐 `/auth`

Main route for authentication.

---

## ➕ `POST /auth/register`

**Register a new user**

### Request Body

```json
{
  "email": "email@email.com",
  "username": "bigahdih",
  "firstname": "John",
  "lastname": "Doe",
  "password": "abc123!@#"
}
```

### Description

Creates a new user account and stores credentials securely.

---

## 🔑 `POST /auth/login`

**Authenticate an existing user**

### Request Body

```json
{
  "email": "email@email.com",
  "password": "abc123!@#"
}
```

### Description

Validates user credentials and returns an authentication token.

---

## 🔒 `/api`

Main route for **protected endpoints**. Requires authentication and role validation.

---

## 🏠 `GET /api/home`

**Protected home route**

### Description

Accessible only to authenticated users.

```http
GET /api/home
```

---

## 🛡️ `GET /api/admin`

**Admin-only route**

### Description

Accessible only to users with the `admin` role.

```http
GET /api/admin
```

## 🔒 `/post`

Main route for **protected endpoints**. Requires authentication and role validation.

---

## `POST /post/makepost`

**Routes all Authemticated users can make post**

### Description

Data to be sent should include following fields

```json
{
  "title": "post title",
  "body": "data about post"
}

```

---

## 📌 Notes

* All requests use `application/json` or `urlencoded`
* JWT authentication required for `/api/*` and `/post/*` routes
* Admin routes require `role: admin`

---
