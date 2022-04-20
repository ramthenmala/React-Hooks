import useFetch from './hooks/useFetch';

const url = `http://jsonplaceholder.typicode.com/posts`;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const App = () => {
  const { data, error } = useFetch<Post[]>(url);
  if (error) return <p>There is an error.</p>;
  if (!data) return <p>Loading...</p>;
  return <p>{data[0].title}</p>;
};

export default App;
