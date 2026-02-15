import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { Mail, MapPin, Phone, Github, Linkedin, Link2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Environment variables from .env (Vite exposes VITE_* vars via import.meta.env)
const {
    VITE_EMAILJS_SERVICE_ID: SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID: TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY: PUBLIC_KEY,
} = import.meta.env;

/**
 * Contact Section with EmailJS Integration
 * Sends emails directly from the frontend without a backend server.
 * Uses environment variables for secure credential management.
 */
export default function Contact() {
    const formRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    // UI state: loading, success, error
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });
    const [errors, setErrors] = useState({});

    /**
     * Validates email format using regex
     * Returns true if valid, false otherwise
     */
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    /**
     * Client-side form validation
     * Checks required fields and email format before submission
     */
    const validateForm = () => {
        const newErrors = {};

        if (!formData.from_name.trim()) {
            newErrors.from_name = 'Name is required';
        } else if (formData.from_name.trim().length < 2) {
            newErrors.from_name = 'Name must be at least 2 characters';
        }

        if (!formData.from_email.trim()) {
            newErrors.from_email = 'Email is required';
        } else if (!isValidEmail(formData.from_email.trim())) {
            newErrors.from_email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear field error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
        setStatus({ type: null, message: '' });
    };

    /**
     * Handles form submission via EmailJS
     * - Validates form before sending
     * - Uses emailjs.sendForm() with form ref (EmailJS binds to form fields by name)
     * - Manages loading state and success/error feedback
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate before sending
        if (!validateForm()) {
            setStatus({ type: 'error', message: 'Please fix the errors above.' });
            return;
        }

        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
                throw new Error(
                    'Missing EmailJS credentials. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
                );
            }

            // emailjs.sendForm binds to the form element and sends field values matching template variables
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            });

            setStatus({ type: 'success', message: "Thank you! Your message has been sent. I'll get back to you soon." });
            setFormData({ from_name: '', from_email: '', message: '' });
            setErrors({});
        } catch (err) {
            console.error('EmailJS Error:', err);
            setStatus({
                type: 'error',
                message: err.message || 'Failed to send message. Please try again or email me directly.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        { icon: Mail, text: 'danishzaman1786@gmail.com', href: 'mailto:danishzaman1786@gmail.com' },
        { icon: Phone, text: '+91 90449 32790', href: 'tel:+919044932790' },
        { icon: MapPin, text: 'Bangalore, India', href: 'https://maps.google.com/?q=Bangalore,India' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/danish123-a', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/danish0123/', label: 'LinkedIn' },
        { icon: Link2, href: 'https://linktr.ee/danishzaman1786', label: 'Linktree' },
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Get In <span className="text-primary">Touch</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Have a project in mind or just want to chat? Feel free to reach out.
                                I'm always open to discussing new projects, creative ideas, or opportunities.
                            </p>

                            <div className="space-y-4 mb-8">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.text}
                                        href={item.href}
                                        className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                                    >
                                        <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span>{item.text}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="glass p-8 rounded-2xl"
                                noValidate
                            >
                                <div className="mb-6">
                                    <label htmlFor="from_name" className="block text-sm font-semibold mb-2">
                                        Your Name <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="from_name"
                                        name="from_name"
                                        value={formData.from_name}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                                            errors.from_name
                                                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                                                : 'border-white/10 focus:border-primary focus:ring-primary/30'
                                        }`}
                                        placeholder="John Doe"
                                        autoComplete="name"
                                    />
                                    {errors.from_name && (
                                        <p className="mt-1.5 text-sm text-red-400">{errors.from_name}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="from_email" className="block text-sm font-semibold mb-2">
                                        Your Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="from_email"
                                        name="from_email"
                                        value={formData.from_email}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                                            errors.from_email
                                                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                                                : 'border-white/10 focus:border-primary focus:ring-primary/30'
                                        }`}
                                        placeholder="john@example.com"
                                        autoComplete="email"
                                    />
                                    {errors.from_email && (
                                        <p className="mt-1.5 text-sm text-red-400">{errors.from_email}</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                        Your Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                                            errors.message
                                                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
                                                : 'border-white/10 focus:border-primary focus:ring-primary/30'
                                        }`}
                                        placeholder="Tell me about your project..."
                                        autoComplete="off"
                                    />
                                    {errors.message && (
                                        <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>
                                    )}
                                </div>

                                {/* Success / Error Status Message */}
                                {status.message && (
                                    <div
                                        className={`mb-6 p-4 rounded-lg text-sm ${
                                            status.type === 'success'
                                                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                                : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                        }`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full px-8 py-4 bg-primary hover:bg-primary/80 text-white rounded-lg font-semibold transition-all glow flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
