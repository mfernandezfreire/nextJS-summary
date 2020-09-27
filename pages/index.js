import axios from "axios";
import Link from "next/Link";

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello This is the Index Page</h1>
      <ul>
        {props.posts.map((item) => (
          <li key={item.id}>
            <Link href={`/post?id=${item.id}`} as={`/p/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      // In li you can find as. 'as' makes a url more readable for the users
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  console.log(data[0]);
  return { posts: data };
};

export default Index;
