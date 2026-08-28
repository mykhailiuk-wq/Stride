//vite-project\src\App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginForm from "./pages/LoginForm";
import SignInForm from "./pages/SignInForm";
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header></Header>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}