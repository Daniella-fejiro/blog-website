import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [id]);

    if (!post)
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
        </div>
    );

    return (
    <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="font-raleway font-bold text-2xl md:text-3xl text-center text-blue-600 mb-6">
        {post.title}
        </h2>

        <p className="font-ubuntu text-gray-700 text-lg leading-relaxed md:text-xl">
        {post.content}
        </p>
    </div>
    );
}