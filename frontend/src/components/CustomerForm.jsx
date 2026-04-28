import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

function CustomerForm({ form, onChange, onSubmit, error }) {
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ display: "grid", gap: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={onChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
        fullWidth
        required
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={form.phone}
        onChange={onChange}
        type="tel"
        fullWidth
        required
        helperText="Enter 10-digit phone number"
      />
      <Button type="submit" variant="contained" size="large">
        Submit
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
}

export default CustomerForm;
