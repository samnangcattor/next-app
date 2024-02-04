import Link from 'next/link';
import ProductCart from './components/ProductCard/ProductCart';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
}
