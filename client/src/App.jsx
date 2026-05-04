import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header"
import Home from "./pages/Home"
import NewPost from "./pages/NewPost"
import Post from "./pages/Post"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

export default function App() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}