import axios from "axios";
import { useState, useEffect } from "react";

import PostsList from "../componets/PostsList";

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
    <>
      <h1 className="title text-center mx-3 my-3">Posts List</h1>
      <PostsList posts={posts} />
    </>
  );
}
