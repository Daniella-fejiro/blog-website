import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getToken } from "../auth";

export default function NewPost() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [snippet, setSnippet] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = getToken();

        if (!token) {
            toast.error("You must be logged in");
            navigate('/login')
            return;
        }

        await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title,snippet, content })
        });

        setTitle("");
        setContent("");
        setSnippet("")

        toast.success("Post created!");
        navigate('/')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6">
            
            <h2 className="text-3xl text-blue-600 font-bold font-raleway text-center">
                Create New Post
            </h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg font-ubuntu focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={(e) => setTitle(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Snippet"
                required
                value={snippet}
                onChange={(e) => setSnippet(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg font-ubuntu focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <textarea
                placeholder="Content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-lg font-ubuntu h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
                Post
            </button>

            </form>
        </div>
    );
}