import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const PostDetails = (props) => {
  // console.log(props.match.params.id);
  const params = useParams();
  const navigate = useNavigate();


  let { data: post, isloading, errMsg } = useFetch(
    `http://localhost:4000/posts/${params.id}`
  );
  const handleDelete=()=>{
    fetch(`http://localhost:4000/posts/${params.id}`,{
      method:"DELETE",
    }).then(()=>{
      navigate("/");
    })
  }
  const handlUpdate=()=>{
    fetch(`http://localhost:4000/posts/${params.id}`,{
      method:"UPDATE"
    })
  }
  return (
    <>
      {isloading && <div>loading ...</div>}
      {errMsg && <div className="error">{errMsg} <Link to={'/'}>Go Home</Link></div>}
      {post && !isloading && !errMsg && (
        <article className="container post-details">
          <div className="post-details-title">
            <h1> {post.title}</h1>
            <div>
            <button className="btn btn-danger" onClick={handleDelete}> Delete </button>
            <button className="btn btn-danger" onClick={handlUpdate}> Update </button>
            </div>
          </div>

          <img src={post.image} alt="" className="post-details-img" />
          <div className="post-author">
            By: {post.author ? post.author : "Ali"}
          </div>
          <p className="post-details-body">{post.body}</p>
        </article>
      )}
    </>
  );
};

export default PostDetails;
