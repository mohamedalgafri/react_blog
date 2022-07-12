import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreeatePost = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("admin");
  const navigate =useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const post = {
      title,
      image : url,
      body,
      author
    }

    fetch("http://localhost:4000/posts" , {
      method:"POST",
      headers : {"Content-Type": "application/json"},
      body:JSON.stringify(post),
    }).then(()=>{
      navigate("/");
    })

  };

  return (
    <section className="create-post">
      <h2>Add New Post</h2>
      <form onSubmit={handleForm}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Image :</label>
        <input
          type="url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label>Blog body :</label>
        <textarea
          required
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author :</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="admin">admin</option>
          <option value="codv">codv</option>
        </select>
        <button className="btn" type="submit">
          Add Blog
        </button>
      </form>
    </section>
  );
};

export default CreeatePost;
