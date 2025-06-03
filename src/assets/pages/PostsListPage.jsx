import axios from "axios";
import { useState, useEffect } from "react";

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
      <h1>Posts List</h1>
      <div className="container">
        <div className="row">
          {posts.map((post) => {
            return (
              <div className="col-4">
                <div className="card">
                  <div className="card-title">
                    <h2>{post.title}</h2>
                  </div>
                  <div className="card-body">
                    <p>{post.text}</p>
                    <figure>
                      <img
                        src={`http://localhost:3000/${post.img}`}
                        alt={post.title}
                      />
                    </figure>
                    <ul>
                      {post.tags.map((tag) => {
                        return <li>{tag}</li>;
                      })}
                    </ul>
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
