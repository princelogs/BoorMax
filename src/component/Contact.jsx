import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    alert("Failed to send message");
                    console.log(error);
                }
            );
    };

    return (
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
                Get In Touch
            </h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="p-3 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-3 rounded h-32"
                ></textarea>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-semibold"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
