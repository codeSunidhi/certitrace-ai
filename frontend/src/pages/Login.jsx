import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Lock, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const navigate = useNavigate();
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);
    navigate("/dashboard");
  }
}, [navigate]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    // Save JWT
    localStorage.setItem("token", response.data.token);

    alert("Login Successful!");

    navigate("/dashboard");
  } catch (err) {
    console.error(err);

    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError("Unable to connect to the server.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      data-testid="login-page"
      className="min-h-screen flex flex-col bg-white"
    >
      <Navbar />

      <main className="flex-1 bg-slate-50">
        <section className="py-16 sm:py-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1
                data-testid="login-heading"
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                Login
              </h1>

              <p className="mt-3 text-sm text-slate-600">
                Sign in to access your CertiTrace AI workspace.
              </p>
            </div>

            <div
              data-testid="login-card"
              className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm"
            >
              {error && (
  <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
    {error}
  </div>
)}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      data-testid="login-email-input"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />

                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      data-testid="login-password-input"
                      className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  data-testid="login-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  {loading ? "Logging in..." : "Login"}
                </button>
                <div className="mt-4">
  <button
    type="button"
    onClick={() =>
      window.location.href =
        "http://localhost:5000/api/auth/google"
    }
    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-semibold hover:bg-slate-100"
  >
    Sign in with Google
  </button>
</div>
              </form>

              <p className="mt-6 text-center text-xs text-slate-500">
  Secure login powered by JWT authentication.
</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;