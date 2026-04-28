const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let customers = [];

app.get("/", (req, res) => {
  res.send("welcome to the Customer Management Dashboard API");
});

app.get("/customers", (req, res) => {
  res.json(customers);
});

app.post("/customers", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newCustomer = {
    id: uuidv4(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = customers.length;

  customers = customers.filter((customer) => customer.id !== id);

  if (customers.length === initialLength) {
    return res.status(404).json({ error: "Customer not found" });
  }

  res.json({ message: "Customer deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
