import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostsContext = createContext();

function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const data = { posts, setPosts };

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
  return <PostsContext.Provider value={data}>{children}</PostsContext.Provider>;
}

function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, usePosts };
