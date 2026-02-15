# Contact Form Setup (EmailJS)

This guide explains how to configure the EmailJS-powered contact form in the portfolio.

---

## 1. Installation

```bash
npm install @emailjs/browser
```

---

## 2. Environment Variables

### Create `.env` file

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

### Add your EmailJS credentials to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Vite exposes env variables prefixed with `VITE_` to the client. Never put secret keys here; the public key is safe to expose.

---

## 3. EmailJS Setup

1. **Create an account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Add an Email Service** (e.g., Gmail, Outlook):
   - Go to Email Services → Add New Service
   - Connect your email (Gmail, etc.)
   - Copy the **Service ID** → `VITE_EMAILJS_SERVICE_ID`

3. **Create an Email Template**:
   - Go to Email Templates → Create New Template
   - Use these template variables (must match exactly):
     - `{{from_name}}` – sender's name
     - `{{from_email}}` – sender's email
     - `{{message}}` – message body
   - Example subject: `Contact from Portfolio - {{from_name}}`
   - Save and copy the **Template ID** → `VITE_EMAILJS_TEMPLATE_ID`

4. **Get your Public Key**:
   - Go to Account → API Keys
   - Copy the **Public Key** → `VITE_EMAILJS_PUBLIC_KEY`

---

## 4. Component Placement

The Contact component is already integrated in `App.jsx`:

```jsx
// App.jsx
<Contact />
```

It renders in the main layout between Projects and the footer. No additional setup needed.

---

## 5. Interview Explanation

**"How does your contact form work without a backend?"**

> "I use EmailJS, a third-party service that acts as a relay. When a user submits the form, the frontend calls EmailJS's API with the form data. EmailJS then sends the email from their servers to my inbox using my configured email service (e.g., Gmail). The credentials are stored in environment variables, so they're not hardcoded. The public key is safe to expose in the client; the sensitive parts (like Gmail auth) are handled by EmailJS on their side. It's production-ready and free for a reasonable number of emails per month."

---

## 6. Form Fields (EmailJS Template Variables)

| Form Field   | Input `name`   | Template Variable |
|-------------|----------------|-------------------|
| Name        | `from_name`    | `{{from_name}}`   |
| Email       | `from_email`   | `{{from_email}}`  |
| Message     | `message`      | `{{message}}`     |

Ensure your EmailJS template uses these exact variable names.
