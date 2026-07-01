import { useState } from "react";
import Button from "../atoms/Button.jsx";
import PhoneFrame from "../organisms/PhoneFrame.jsx";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  income: "",
  address: "",
};

export default function ApplicationPage({ onSubmit }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const isReady =
    form.fullName.trim() && form.email.trim() && form.income.trim() && form.address.trim();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <PhoneFrame variant="sync-screen">
      <div className="application-shell">
        <div className="application-header">
          <p className="eyebrow">New card application</p>
          <h1>Apply in minutes</h1>
          <p>
            Complete the basics, submit your request, and we’ll generate a simple summary of the
            card you’re approved for.
          </p>
        </div>

        <div className="application-card">
          <label className="field-group">
            <span>Full name</span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Alex Morgan"
            />
          </label>

          <label className="field-group">
            <span>Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="alex@example.com"
              type="email"
            />
          </label>

          <label className="field-group">
            <span>Annual income</span>
            <input
              name="income"
              value={form.income}
              onChange={handleChange}
              placeholder="$72,000"
            />
          </label>

          <label className="field-group">
            <span>Home address</span>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Market Street"
            />
          </label>

          <Button onClick={() => onSubmit(form)} disabled={!isReady}>
            Submit application
          </Button>
        </div>
      </div>
    </PhoneFrame>
  );
}
