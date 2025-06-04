export default function PostPage() {
  return (
    <>
      <h1>ciao</h1>
      <div className="col-4 g-2">
        <div className="card h-100">
          <div className="card-title">
            <h2 className="title mx-3 my-3">{post.title}</h2>
          </div>
          <div className="card-body">
            <p>{posts.text}</p>
            <figure>
              <img src={`http://localhost:3000/${post.img}`} alt={post.title} />
            </figure>
            <ul>
              <li>{post.tags}</li>
            </ul>
            <Link className="btn btn-primary" to="/posts">
              Torna indietro
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
