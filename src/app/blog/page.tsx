import Link from "next/link";
import { GetPosts } from "@/app/blog/data";

export default async function BlogPage() {
  const posts = await GetPosts();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Блог</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-4">
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">
                {post.userId}
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
