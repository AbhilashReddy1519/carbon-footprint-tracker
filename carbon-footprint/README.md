# 📘 React Router DOM – All Ways to Render Components

This guide covers how to render components using React Router DOM in various ways: using `<Route>`, `<Link>`, `<NavLink>`, `useNavigate`, and more.

---

## ✅ 1. Basic Setup

Install React Router DOM:

```bash
npm install react-router-dom
```

---

## 🧹 2. Create Example Components

```jsx
// Home.jsx
export default function Home() {
  return <h2>Home Component</h2>;
}

// About.jsx
export default function About() {
  return <h2>About Component</h2>;
}

// Contact.jsx
export default function Contact() {
  return <h2>Contact Component</h2>;
}
```

---

## 🚀 3. Using `<Route>` and `<Routes>`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

---

## 🔗 4. Navigation with `<Link>`

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

Use inside the `App` component:

```jsx
<Router>
  <Navigation />
  <Routes>...</Routes>
</Router>
```

---

## ⭐ 5. Navigation with `<NavLink>` (Active Styling)

```jsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> |
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink> |
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
    </nav>
  );
}
```

Add some CSS:

```css
.active {
  font-weight: bold;
  color: red;
}
```

---

## 🔁 6. Programmatic Navigation with `useNavigate()`

```jsx
import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </>
  );
}
```

---

## 🧵 7. Nested Routes (Inside Parent Component)

```jsx
<Routes>
  <Route path="/about" element={<About />}>
    <Route path="team" element={<Team />} />
    <Route path="company" element={<Company />} />
  </Route>
</Routes>
```

And inside `About.jsx`:

```jsx
import { Outlet, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <Link to="team">Team</Link> | <Link to="company">Company</Link>
      <Outlet /> {/* nested components will be rendered here */}
    </div>
  );
}
```

---

## 🚫 8. Fallback Route (404 Page)

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 📦 9. Dynamic Routing with URL Params

```jsx
<Routes>
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>
```

In `UserProfile.jsx`:

```jsx
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

---

## ✅ Summary

| Feature         | Use                                                |
| --------------- | -------------------------------------------------- |
| `<Route>`       | Map paths to components                            |
| `<Link>`        | Static navigation links                            |
| `<NavLink>`     | Links with active class support                    |
| `useNavigate()` | Programmatic navigation (onClick, form submission) |
| `useParams()`   | Access URL parameters                              |
| `Outlet`        | Render nested route content                        |
| `"*"` route     | Catch-all for 404 Not Found                        |

---

## 🧠 Tip

Wrap your entire app with `<BrowserRouter>` only **once** at the top level (usually in `main.jsx` or `index.js`):

```jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

# 📊 Switching Components Without Changing URL in React

This guide explains how to switch between multiple components in React **without changing the URL path**, using `useState`. This method is ideal for tab-style or view-switching behavior where routing is unnecessary.

---

## 🚀 Goal:

* Show 3 buttons: **Home**, **About**, **Contact**
* When a button is clicked, a component is displayed
* **URL remains unchanged** (no routing)

---

## ✅ What This Method is Called

This approach is typically called **Conditional Component Rendering** or **State-based Component Switching** in React.

---

## 📂 React Code Example

```jsx
import { useState } from "react";

// Dummy components
function Home() {
  return <h2>This is the Home component</h2>;
}

function About() {
  return <h2>This is the About component</h2>;
}

function Contact() {
  return <h2>This is the Contact component</h2>;
}

export default function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  // Function to choose what to render
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveComponent("home")}>Home</button>
        <button onClick={() => setActiveComponent("about")}>About</button>
        <button onClick={() => setActiveComponent("contact")}>Contact</button>
      </div>

      {/* Render selected component */}
      <div>
        {renderComponent()}
      </div>
    </div>
  );
}
```

---

## 🔍 Why Use This Method?

* You don't need URL-based navigation (SPA simplicity)
* Fast rendering without `react-router-dom`
* Ideal for tabs, step wizards, modals, or internal views

---

## 🌟 Bonus Tips

* Use `useReducer()` instead of `useState()` for more complex UI states
* You can render inline instead of using `renderComponent()` like:

```jsx
{activeComponent === "home" && <Home />}
{activeComponent === "about" && <About />}
{activeComponent === "contact" && <Contact />}
```

* Add transition animations with libraries like Framer Motion or CSS

---

# 💤 React Lazy Loading (Code Splitting)

React.lazy lets you load components only when they’re needed (on-demand), improving app performance.

## 📦 Example:

```jsx
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
      </Suspense>
    </div>
  );
}
```

## ✅ When to Use

* Large apps with many components
* Route-based code splitting
* Components that aren’t needed immediately

---

# ⚙️ useReducer Hook in React

`useReducer` is a React Hook used for complex state logic. It's similar to Redux’s reducer pattern.

## 📦 Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

## 📂 Example:

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

## ✅ When to Use

* Multiple related state updates
* Complex state logic
* Managing deeply nested state

---

Let me know if you want examples combining all three in a real app!
