import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>

      {/* not the optimal way to nav because it reloads repetetive parts */}
      {/* <a href="/users">Users</a> */}

      {/* this is client side navigation */}
      <Link href="/users">Users</Link> 

      <ProductCard/>
    </main>
  );
}
