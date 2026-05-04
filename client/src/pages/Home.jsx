import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Signup from "./Signup";
import { getToken } from "../auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const[posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/posts`)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);
    console.log(import.meta.env.VITE_API_URL);
    

    const handleDelete = async (id) => {
        try {
            const token = getToken();

            if (!token) {
                toast.error("You must be logged in");
                navigate('/login')
                return;
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`, {
            method: "DELETE",
            });

            if (!response.ok) {
            throw new Error("Failed to delete post");
            }

            const updated = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
            const data = await updated.json();
            setPosts(data);

            alert("Post deleted successfully");
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    

return (
    <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
            <h2 className="text-4xl font-raleway font-bold text-gray-800">
                All Blogs
            </h2>
            <div className="w-16 h-1 bg-blue-600 mt-2 rounded"></div>
        </div>

        <div className="space-y-6">
        {posts.map((post) => (
            <div
            key={post._id}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition duration-200"
            >
            <h3 className="text-xl font-bold font-raleway text-gray-800 mb-2">
                {post.title}
            </h3>

            <p className="text-gray-600 font-ubuntu mb-4">
                {post.snippet}
            </p>

            <div className="flex items-center gap-3">
                <NavLink to={`/post/${post._id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Read More
                </button>
                </NavLink>

                <button
                onClick={() => {
                    console.log("DELETE ID:", post._id);
                    handleDelete(post._id);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                Delete
                </button>
            </div>
            </div>
        ))}
        </div>
    </div>

    );
}