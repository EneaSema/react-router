import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function PostDettailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${post.id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/not-found");
      });
  }, []);

  return (
    <>
      {post.map((p) => {
        return (
          <div className="card">
            <div className="card-title">
              <h2 className="title mx-3 my-3">{p.title}</h2>
            </div>
            <div className="card-body">
              <p>{post.text}</p>
              <figure>
                <img src={`http://localhost:3000/${p.img}`} alt={p.title} />
              </figure>
              <ul>
                {p.tags.map((tag) => {
                  return <li key={tag.i}>{tag}</li>;
                })}
              </ul>
              <Link className="btn btn-primary" to="/postslist">
                Torna indietro
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
