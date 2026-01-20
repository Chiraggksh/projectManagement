# Project Camp Backend 🚀

A robust, secure, and scalable **RESTful API** for collaborative project management built with the MERN ecosystem principles. Project Camp Backend enables teams to manage projects, tasks, subtasks, notes, and members with **role-based access control**.

---

## 📌 Overview

**Project Camp Backend** is designed to power a modern project management system. It supports structured collaboration through projects, task hierarchies, notes, and secure authentication mechanisms.

The backend follows clean REST principles, strong authorization rules, and production-grade security practices.

---

## 🎯 Target Users

* **Admin** – Full system access, project & member management
* **Project Admin** – Task & subtask management within assigned projects
* **Member** – View projects, update task and subtask progress

---

## ✨ Features

### 🔐 Authentication & Authorization

* User registration with **email verification**
* Secure login using **JWT access & refresh tokens**
* Password change, forgot & reset password flow
* Resend email verification
* Role-Based Access Control (RBAC)

### 📁 Project Management

* Create, update, delete projects (Admin only)
* List projects accessible to the user
* View project details with team information

### 👥 Team Member Management

* Invite members via email
* Assign and update project-level roles
* Remove members from projects

### ✅ Task Management

* Create, update, and delete tasks
* Assign tasks to members
* Track task status: `todo`, `in_progress`, `done`
* Attach multiple files to tasks

### 🧩 Subtask Management

* Create subtasks under tasks
* Update completion status (all roles)
* Role-based creation & deletion control

### 📝 Project Notes

* Create and manage project notes (Admin only)
* Read access for all project members

### 🩺 System Health

* Health check endpoint for monitoring API status

---

## 🧱 Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – REST API framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM for MongoDB
* **JWT** – Authentication & authorization
* **Multer** – File upload handling
* **Nodemailer** – Email verification & password reset

---

## 🔗 API Base URL

```
/api/v1
```

---

## 📂 API Endpoints

### 🔑 Authentication (`/auth`)

* `POST /auth/register`
* `POST /auth/login`
* `POST /auth/logout`
* `GET /auth/current-user`
* `POST /auth/change-password`
* `POST /auth/refresh-token`
* `GET /auth/verify-email/:token`
* `POST /auth/forgot-password`
* `POST /auth/reset-password/:token`
* `POST /auth/resend-email-verification`

### 📁 Projects (`/projects`)

* `GET /projects`
* `POST /projects`
* `GET /projects/:projectId`
* `PUT /projects/:projectId`
* `DELETE /projects/:projectId`
* `GET /projects/:projectId/members`
* `POST /projects/:projectId/members`
* `PUT /projects/:projectId/members/:userId`
* `DELETE /projects/:projectId/members/:userId`

### ✅ Tasks (`/tasks`)

* `GET /tasks/:projectId`
* `POST /tasks/:projectId`
* `GET /tasks/:projectId/t/:taskId`
* `PUT /tasks/:projectId/t/:taskId`
* `DELETE /tasks/:projectId/t/:taskId`
* `POST /tasks/:projectId/t/:taskId/subtasks`
* `PUT /tasks/:projectId/st/:subTaskId`
* `DELETE /tasks/:projectId/st/:subTaskId`

### 📝 Notes (`/notes`)

* `GET /notes/:projectId`
* `POST /notes/:projectId`
* `GET /notes/:projectId/n/:noteId`
* `PUT /notes/:projectId/n/:noteId`
* `DELETE /notes/:projectId/n/:noteId`

### 🩺 Health Check

* `GET /healthcheck`

---

## 🔐 Permission Matrix

| Feature                    | Admin | Project Admin | Member |
| -------------------------- | ----- | ------------- | ------ |
| Create Project             | ✅     | ❌             | ❌      |
| Update/Delete Project      | ✅     | ❌             | ❌      |
| Manage Members             | ✅     | ❌             | ❌      |
| Create/Update/Delete Tasks | ✅     | ✅             | ❌      |
| View Tasks                 | ✅     | ✅             | ✅      |
| Update Subtask Status      | ✅     | ✅             | ✅      |
| Create/Delete Subtasks     | ✅     | ✅             | ❌      |
| Create/Update/Delete Notes | ✅     | ❌             | ❌      |
| View Notes                 | ✅     | ✅             | ✅      |

---

## 🗂️ Data Models

### User Roles

* `admin`
* `project_admin`
* `member`

### Task Status

* `todo`
* `in_progress`
* `done`

---

## 📎 File Management

* Multiple file uploads supported per task
* Stored in `public/images`
* Metadata stored: file URL, type, size
* Secure upload handling via Multer

---

## 🔒 Security Highlights

* JWT authentication with refresh tokens
* Role-based authorization middleware
* Input validation across all routes
* Email verification & secure password reset
* CORS configured for controlled access

---

## ✅ Success Criteria

* Secure and scalable authentication system
* End-to-end project and task lifecycle support
* Strict role-based access control
* File attachment support for collaboration
* Reliable email-based user verification
* Clean, REST-compliant API architecture

---

## 📘 Notes

This project is designed with **production-readiness** in mind and can be easily extended with:

* Real-time notifications (WebSockets)
* Activity logs & audit trails
* Frontend integration (React)
* Deployment via Docker & CI/CD

---

### 👨‍💻 Author

**Chirag Kaushik**
Backend Developer | MERN Stack | API Design

---

⭐ If you find this project useful, consider starring the repository!
