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

---

## 📌 Notes

* All requests use `application/json`
* JWT authentication required for `/api/*` routes
* Admin routes require `role: admin`

---

✨ *Clean, readable, and GitHub-ready* ✨
