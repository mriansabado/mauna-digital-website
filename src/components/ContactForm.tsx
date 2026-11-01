import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setStatus('error')
      setErrorMessage('Form is not configured yet. Please email or call instead.')
      return
    }

    formData.append('access_key', accessKey)
    formData.append('subject', 'New message from Mauna Digital website')
    formData.append('from_name', 'Mauna Digital Contact Form')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = (await response.json()) as { success: boolean; message?: string }

      if (data.success) {
        setStatus('success')
        form.reset()
        return
      }

      setStatus('error')
      setErrorMessage(data.message || 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setErrorMessage('Could not send. Check your connection and try again.')
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      {/* Web3Forms honeypot — leave empty; bots that fill it get blocked */}
      <input
        type="checkbox"
        name="botcheck"
        className="contact-form-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === 'success' && (
        <p className="form-message success" role="status">
          Got it — I&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === 'error' && (
        <p className="form-message error" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="form-group">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@business.com"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me what's going on — site URL helps if you have one."
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary contact-btn btn-large"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
