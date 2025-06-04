import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function PostPage() {
  const [posts, setPosts] = useState([{}]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((resp) => {
        console.log(resp.data.data);
        setPosts(resp.data.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/not-found");
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="card h-100">
          <div className="card-title">
            <h2 className="title mx-3 my-3">{posts.title}</h2>
          </div>
          <div className="card-body">
            <p>{posts.text}</p>
            <figure>
              <img
                src={`http://localhost:3000/${posts.img}`}
                alt={posts.title}
              />
            </figure>
            <ul>
              <li>{`${posts.tags}`}</li>
            </ul>
            <Link className="btn btn-primary" to="/posts">
              Torna indietro
            </Link>
            <Link className="btn btn-primary mx-3" to="/posts">
              Vai al prossimo post
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
