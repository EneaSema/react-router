import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PostDettailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((resp) => {
        console.log(resp.data.data);
        setPost(resp.data.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/not-found");
      });
  }, []);

  return (
    <>
      <div className="container">
        <div key={post.id} className="card">
          <div className="card-title">
            <h2 className="title mx-3 my-3">{post.title}</h2>
          </div>
          <div className="card-body">
            <p>{post.text}</p>
            <figure>
              <img src={`http://localhost:3000/${post.img}`} alt={post.title} />
            </figure>
            <ul>
              {post.tags.map((tag, i) => {
                return <li key={tag.i}>{tag}</li>;
              })}
            </ul>
            <button
              onClick={(e) => {
                return e.target.value;
              }}
              className="btn btn-primary"
            >
              Torna indietro
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
