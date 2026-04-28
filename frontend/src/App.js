import { useEffect, useState, useCallback } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = process.env.REACT_APP_API_URL;

  const loadCustomers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${backendUrl}/customers`);

      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }

      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      setError("Unable to load customers.");
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  useEffect(() => {
    if (backendUrl) {
      loadCustomers();
    }
  }, [loadCustomers, backendUrl]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("Please fill in all fields.");
      return;
    }

    const nameRegex = /^[a-zA-Z\s,.]+$/;
    if (!nameRegex.test(form.name)) {
      setError("Name can only contain letters, spaces, commas, and periods.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.phone.length !== 10 || !/^\d{10}$/.test(form.phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/customers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Unable to save customer.");
      }

      const newCustomer = await response.json();

      setCustomers((prev) => [...prev, newCustomer]);
      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    setError("");
    try {
      const response = await fetch(`${backendUrl}/customers/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Unable to delete customer.");
      }

      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="md" className="app-shell">
        <Paper className="app-card" elevation={3}>
          <Typography variant="h4" gutterBottom>
            Customer Manager
          </Typography>

          <CustomerForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={error}
          />
        </Paper>

        <Paper className="app-card" elevation={3}>
          <Typography variant="h5" gutterBottom>
            Customer List
          </Typography>

          <CustomerTable
            customers={customers}
            onDelete={handleDelete}
            loading={loading}
          />
        </Paper>
      </Container>
    </>
  );
}

export default App;
