import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <nav>
          <ul>
            <li>
              <Link href="posts">posts</Link>
            </li>
            <li>
              <Link href="photos">photos</Link>
            </li>
          </ul>
        </nav>
        <div>Home page</div>
      </main>
    </div>
  );
}
