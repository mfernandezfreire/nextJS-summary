// import { withRouter } from "next/router";
import axios from "axios";

const Post = ({ id, comments }) => {
  console.log(id, comments);
  return (
    <div>
      <h1>You are looking at post {id}</h1>
      {comments.map((comment) => (
        <div>
          <Comments key={comment.id} {...comment} />
        </div>
      ))}
    </div>
  );
};

const Comments = ({ email, body }) => {
  console.log("hola", email, body);
  return (
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    // https://jsonplaceholder.typicode.com/posts
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  console.log(data);
  return { ...query, comments: data };
};

// Also we can do it with withRouter that way ; )
// import { withRouter } from "next/router";

// const Post = (props) => (
//   <h1>You are looking at post {props.router.query.id}</h1>
// );

export default Post;

// export default withRouter(Post);
