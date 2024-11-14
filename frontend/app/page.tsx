import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import LogIn from "./components/LogIn";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Header */}
      <h1 className="text-6xl font-bold mb-6">Welcome to DataAlgo</h1>
      {/* Subheader */}
      <h2 className="text-xl font-medium text-gray-600 mb-6">
      Learn to Crush Your Next Tech Interview!
      </h2>

      {/* Buttons for login and stats */}
      <div className="flex flex-col items-center gap-4">
        
        <LogIn />
        <Link 
          href="/stats" 
          className="btn btn-wide">
          Check my stats
        </Link>
      </div>

      {/* not the optimal way to nav because it reloads repetetive parts */}
      {/* <a href="/users">Users</a> */}

      {/* this is client side navigation */}
      {/* <Link href="/users">Users</Link>  */}

      {/* this allows us to use a component
      <ProductCard/> */}
    </main>
  );
}
