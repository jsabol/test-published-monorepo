import Header from "../components/Header";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
}
