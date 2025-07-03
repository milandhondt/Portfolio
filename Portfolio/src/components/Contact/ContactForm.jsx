import { useForm, ValidationError } from '@formspree/react';

const API_KEY = import.meta.env.VITE_API_KEY;

const ContactForm = () => {
  const [state, handleSubmit] = useForm(API_KEY);

  if (state.succeeded) {
    return <p>Bedankt voor je bericht! Ik neem spoedig contact op.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          E-mailadres
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="message">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
      >
        Verzenden
      </button>
    </form>
  );
};

export default ContactForm;
