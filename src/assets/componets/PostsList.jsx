import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostsList({ posts }) {
  return (
    <div className="container">
      <div className="row">
        {posts.map((post, i) => {
          return (
            <div className="col-4 g-2">
              <PostCard post={post} />
              <Link className="btn btn-primary" to={`/posts/${post.id}`}>
                Scopri di più
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
