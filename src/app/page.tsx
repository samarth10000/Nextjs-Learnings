import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>My next app</h1>
      <Link href="/blog">Blog</Link>

      <Link href="/products/productId">product1</Link>
    </div>
  );
};

export default Home;
