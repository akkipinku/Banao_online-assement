<<<<<<< HEAD
# Nexus Dashboard

A modern, responsive dashboard implementation featuring React Router, localized Authentication, and Data Visualization.

##  Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Application**
   - Visit `http://localhost:5173` (or port shown in terminal).

##  Features Checklist

### Part A: Landing Page
- [x] Unmodified original landing page at `/`.

### Part B: Authentication
- [x] **Fake Auth System**: Uses `localStorage` to persist sessions (`auth_token`).
- [x] **Login Page** (`/login`): Clean UI with feedback.
- [x] **Sign Up Page** (`/signup`): Functional form redirecting to dashboard.
- [x] **Route Protection**: Unauthenticated access to `/dashboard/*` redirects to Login.
- [x] **Logout**: Clears session and redirects to Login.

### Part C: Dashboard
- [x] **Overview** (`/dashboard`):
  - Total users count (fetched from API).
  - Derived status cards (Active, Engagement, etc.).
  - Recent activity feed.
- [x] **Users Management** (`/dashboard/users`):
  - Fetch data from `jsonplaceholder.typicode.com`.
  - **Search**: Real-time filtering by Name or Email.
  - **Sort**: A-Z / Z-A toggling on Name column.
  - **Pagination**: Client-side pagination (5 items per page).
  - **Detail View**: Modal with extended user information.
  - **States**: Loading skeletons and error handling.
- [x] **Settings** (`/dashboard/settings`):
  - Profile form (Name/Email) with `localStorage` persistence.
  - **Theme Toggle**: Light/Dark mode switching (persists to `localStorage`).

## Screenshots

*(Placeholder: Insert screenshots of Login, Dashboard, and Users Modal here)*

## Decisions & Tradeoffs

1. **Router Choice**: Used `react-router-dom` as this is a Vite SPA. Wrapped the entire app in `AuthProvider` to ensure auth state is accessible globally.
2. **Landing Page Preservation**: Kept the original `App.tsx` content inline in the root route to strictly adhere to the "no touch" constraint for existing components, while still allowing the router to manage it.
3. **Component Isolation**: Created a dedicated `ui-dashboard` folder for primitives (`Button`, `Card`, `Input`). This duplication allows the dashboard to have a completely distinct design system (Zinc/Dark) without risking regression on the landing page's existing styles.
4. **Data Handling**: 
   - Used `fetch` inside `useEffect` for simplicity given the scope. In a production app, I would use TanStack Query for caching and better state management.
   - Client-side pagination/sorting was chosen because the mock API returns all 10 users at once.

<<<<<<< HEAD
##  Demo

*(Placeholder: Link to 10-minute screen recording)*
=======
# Banao_online-assement
submission for banao technologies . I created a clone of the figma design provided by them and add some features like fake authentication etc . 
>>>>>>> f618a9a354b1cc6ae0a077be3665360732f94fba
=======
##  Demo
https://drive.google.com/file/d/1wc5J4JezURrPWsARYSpgxZvZK25VrWbQ/view?usp=sharing
https://drive.google.com/file/d/1hXp8FZ6Y2cvDQnZDdJB3x9J6rxGgQl5B/view?usp=sharing
>>>>>>> 52f25b25646bcfa2f6535afa456f386dc8c39ee0
