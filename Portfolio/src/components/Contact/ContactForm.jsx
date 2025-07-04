import { useForm, ValidationError } from '@formspree/react';
import Title from '../General Components/Title';

const API_KEY = import.meta.env.VITE_API_KEY;

const ContactForm = () => {
  const [state, handleSubmit] = useForm(API_KEY);

  if (state.succeeded) {
    return (
      <div className="bg-[#F2F2F2] border border-gray-200 rounded-3xl shadow-lg p-10 w-full h-full flex items-center justify-center text-center">
        <p className="text-xl text-green-700 font-medium">Bedankt voor uw bericht! Ik neem zo snel mogelijk contact met u op.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F2F2F2] border border-gray-200 rounded-3xl shadow-lg p-8 lg:p-12 w-full h-full flex flex-col justify-between"
    >
      <Title text={"Formulier"} pos={"C"} />
      <div className="mt-6 flex flex-col gap-6 flex-grow">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            E-mailadres
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border bg-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium text-gray-700">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="border bg-white border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-8 bg-[#5F0077] text-white hover:bg-[#7A1499] transition-colors px-6 py-3 rounded-full shadow-md text-lg font-semibold disabled:opacity-50"
      >
        Verzenden
      </button>
    </form>
  );
};

export default ContactForm;
