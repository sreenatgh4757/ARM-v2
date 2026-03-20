import { useState, type FormEvent } from 'react';
import { supabase } from '../../lib/supabase';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const { error } = await supabase
      .from('contact_messages')
      .insert({ name, email, message });

    if (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('sent');
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full bg-transparent border-b border-white/10 focus:border-cyan-accent outline-none py-3 text-sm text-white placeholder:text-text-dim transition-colors duration-200"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full bg-transparent border-b border-white/10 focus:border-cyan-accent outline-none py-3 text-sm text-white placeholder:text-text-dim transition-colors duration-200"
        />
      </div>
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          rows={4}
          className="w-full bg-transparent border-b border-white/10 focus:border-cyan-accent outline-none py-3 text-sm text-white placeholder:text-text-dim transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-cyan-accent text-dark px-6 py-3 rounded-lg text-sm font-medium hover:bg-cyan-accent/90 transition-colors duration-200 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : status === 'error' ? 'Failed — try again' : 'Send →'}
      </button>
    </form>
  );
}
