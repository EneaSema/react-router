import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostsListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((resp) => {
        console.log(resp.data.data);
        setPosts(resp.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => {
          return (
            <div className="col-4 g-2">
              <div className="card h-100">
                <div className="card-title">
                  <h2 className="title mx-3 my-3">{post.title}</h2>
                </div>
                <div className="card-body">
                  <figure>
                    <img
                      src={`http://localhost:3000/${post.img}`}
                      alt={post.title}
                    />
                  </figure>
                  <p>{post.text}</p>
                </div>

                <Link className="btn btn-primary" to={`/posts/${post.id}`}>
                  Scopri di più
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
