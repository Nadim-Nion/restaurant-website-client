# **Chicken Crisper Combos - Client**
### A Restaurant Website

## Overview

**Chicken Crisper Combos** is a dynamic restaurant web application where users can browse menu items, add items to their cart, and manage the cart seamlessly. This website is designed to provide a smooth user experience with real-time cart updates, interactive alerts, and an intuitive sidebar for viewing cart contents.

## Key Features

1. **Add to Cart Functionality:** Users can add items to the cart by clicking the "Add To Cart" button.
2. **Already Exists Alert:** If an item is already in the cart, the "Add To Cart" button changes to "Already Exists" to prevent duplicate additions.
3. **Sweet Alert Notifications:** After successfully adding an item to the cart, a Sweet Alert confirmation appears.
4. **Cart Summary in Header:** The total items in the cart are displayed in the header for quick reference.
5. **Right-Side Drawer (Sidebar):** Clicking "Add To Cart" opens a sidebar from the right side of the screen.
6. **Cart Sidebar Details:** The sidebar displays all items in the cart, with options to adjust quantities.
7. **Quantity Adjustment:** Users can increase item quantities, and prices are recalculated based on quantity.
8. **Delete Cart Item:** Users can remove items from the cart, with a confirmation alert displayed before deletion.
9. **Interactive Alerts for Deletion:** Sweet Alert is used to confirm before removing an item from the cart.

## Technologies Used

### Front-end
- **React.js**
- **React Router** for page navigation
- **Tailwind CSS** and **Daisy UI** for responsive and modern styling

### Data Fetching
- **TanStack Query** for optimized data fetching and caching
- **Axios JS** for API requests

### State Management
- **Context API** for managing global state, including cart data

### Back-end
- **Express.js** for server-side handling
- **MongoDB** for database management

### Deployment Tools
- **Netlify** for front-end deployment
- **Vercel** for back-end deployment

---
## Screenshots

* Image 1 (Home Page): 

![Chicken-Crisper 1](https://github.com/user-attachments/assets/2a9a388e-a417-4d4e-bbe2-3e82bc9faf40)

* Image 2 (Sidebar): 

![Chicken-Crisper 2](https://github.com/user-attachments/assets/7b86310a-3b42-4c43-8063-bb197296c287)


---

## Live Website

Netlify: https://restaurant-client-nion.netlify.app/

---

## Getting Started

To get a local copy of **Chicken Crisper Combos - Restaurant Website** up and running, follow these steps.

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager, typically installed with Node.js)
- **MongoDB** (either locally installed or a MongoDB Atlas account for remote connection)

---
## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nadim-Nion/restaurant-website-client.git
   cd chicken-crisper-combos
   ```

2. **Set up the Client (Frontend):**
   - Navigate to the client directory and install dependencies.
   ```bash
   cd client
   npm install
   ```

3. **Set up the Server (Backend):**
   - Navigate to the server directory and install dependencies.
   ```bash
   cd ../server
   npm install
   ```

4. **Configure Environment Variables:**
   - Create a `.env` file in the `server` directory with the following variables:
     ```plaintext
     MONGODB_URI=your_mongodb_connection_string
     PORT=5000
     ```

### Running the Application

1. **Start the Backend Server:**
   - In the `server` directory, start the server:
   ```bash
   npm start
   ```
   - The backend server should now be running on `http://localhost:5000`.

2. **Start the Frontend Client:**
   - Open a new terminal, navigate to the `client` directory, and start the frontend:
   ```bash
   npm run dev
   ```
   - The frontend should now be running on `http://localhost:5173` (or a similar local development URL).

### Accessing the Application

- Open your browser and go to `http://localhost:5173` to explore the **Chicken Crisper Combos** restaurant website.

---

## Commits

This repository adheres to a structured commit message convention to enhance readability and maintainability. Here's an overview of the key commit types:

- **feat:** Introduces a new feature to the application.
- **fix:** Addresses a bug or issue identified in the codebase.
- **docs:** Encompasses changes made to documentation, such as updates, additions, or corrections.
- **style:** Covers formatting adjustments, whitespace changes, or fixing minor inconsistencies like missing semicolons.
- **refactor:** Represents code structure improvements without altering functionality. This can involve code organization, renaming variables or functions, or improving readability.
- **test:** Introduces new tests or updates existing tests to ensure code quality and maintainability.
- **chore:** Encompasses changes that don't directly affect the application's functionality, such as updating build tasks, package manager configurations, or dependency versions.

**Optional Improvement:**

Consider adopting a more comprehensive commit message convention like Conventional Commits ([https://www.conventionalcommits.org/en/v1.0.0-beta.4/](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)). This approach provides a standard format for commit messages, including type, scope (optional), and a clear description of the change, making it easier to generate changelogs, automate workflows, and collaborate effectively.

By following these guidelines and potentially adopting a more detailed convention, you'll ensure clear and consistent commit messages that benefit you and your team in the long run.## Contributions

Feel free to contribute to this project! If you have any suggestions or improvements, please fork the repository, make your changes, and submit a pull request.


---


## Usage

1. Navigate to the homepage to explore menu items.
2. Click "Add To Cart" to add an item to the cart. If the item is already added, it will show "Already Exists."
3. View and manage cart items in the right sidebar, adjusting quantities and deleting items as needed.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Available Scripts

- **`npm run dev`**: Start the application in development mode.
- **`npm run build`**: Build the application for production.

---

## Deployment

The frontend of this project is deployed on **Netlify**. For your own deployment, follow these steps:

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder on Netlify.

---


## Tech Stack

**Client:** React+Vite, React Router, Tailwind CSS, Daisy UI, Axios JS, TanStack Query

**Server:** Express.js, Node.js

**Database:** MongoDB

**Tools:** Vite, Vercel, npm, Netlify

**State Management:** Context API



## FAQ

#### Is this website reponsible?

Answer : Yes, the full website is responsive for the all devices (Desktop, Tablet and Phone)

#### Is this website store data to the database?

Answer : I have stored all the data in MongoDB.

## 🚀 About Me
Hi, I am Nadim Mahmud Nion. I have recently concluded my graduation from the department of Computer Science and Engineering (CSE) at the Daffodil International University (DIU). I have been learning MERN Stack Web Development since 2022. I am expertise in the following skills:

* React

* Express.js 

* Node.js 

* MongoDB

* JWT

* Stripe

* Vite

* React Router

* Firebase (Authentication & Hosting)

* Vercel

* JavaScript

* Advanced JavaScript

* Daisy UI 

* Bootstrap

* Tailwind

* HTML5

* CSS3

* Media Query

I have built multiple projects using these skills. You are invited to my GitHub profile to know about my projects and don't forget to give a star to my projects.

