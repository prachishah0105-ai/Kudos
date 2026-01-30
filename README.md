# Datacom Kudos System

A robust internal employee recognition platform built using **Spec-Driven Development**. This system allows team members to appreciate one another through a public "Kudos Feed" while providing administrators with necessary moderation tools.

## 🚀 Overview

This project was developed by translating high-level business requirements into a formal technical specification before implementation. This ensures that edge cases—such as content moderation and data validation—were handled by design rather than as an afterthought.

## ✨ Features

- **Peer Recognition:** Select a colleague and send a message of appreciation (500-character limit).
- **Public Dashboard:** A real-time feed of positive feedback from across the company.
- **Admin Moderation:** Dedicated controls for administrators to hide or delete inappropriate content.
- **Audit Logging:** Tracks who moderated a post, when, and for what reason.
- **Responsive Design:** Fully functional across desktop and mobile devices.

## 🛠️ Technical Stack

- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js & Express
- **Database:** PostgreSQL (with Sequelize ORM)
- **Methodology:** Spec-Driven Development (AI Architect Workflow)

## 📖 Specification

The full technical blueprint, including user stories, database schema designs, and API documentation, can be found in the [SPECIFICATION.md](./SPECIFICATION.md) file.

## 🛠️ Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/datacom-kudos-system.git
   Install dependencies:
2. Install dependencies:
Bash
npm install
3. Environment Setup: Create a .env file and add your database credentials.

4. Run the application:

Bash

npm run dev
