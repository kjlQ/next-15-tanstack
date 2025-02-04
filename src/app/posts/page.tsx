import { DataTable } from "@/components/ui/data-table";
import { getPosts } from "@/features/posts/api/posts.api";
import { columns } from "@/features/posts/components/Columns";
import Link from "next/link";

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div>
      <button>
        <Link href="/"> ---back</Link>
      </button>
      <h1>posts</h1>
      <DataTable columns={columns} data={posts} />
    </div>
  );
};
export default Posts;
