import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((resp) => {
      console.log(resp.data.data);
      setPosts(resp.data.data);
    });
  }, []);

  return (
    <>
      <h1 className="title text-center mx-3 my-3">Posts List</h1>
      <div className="container">
        <div className="row">
          {posts.map((post, i) => {
            return (
              <div className="col-4 g-2">
                <div key={post.id} className="card h-100">
                  <div className="card-title">
                    <h2 className="title text-center">{post.title}</h2>
                  </div>
                  <div className="card-body">
                    <p>{post.text}</p>
                    <figure>
                      <img
                        src={`http://localhost:3000/${post.img}`}
                        alt={post.title}
                      />
                    </figure>
                    <Link className="btn btn-primary" to={`/posts/${post.id}`}>
                      Scopri di più
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
