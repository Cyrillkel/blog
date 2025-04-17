// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { GetById } from "../data";

export default async function PostPage({ params }: { params: { id: string } }) {
  // Конвертируем slug в number (JSONPlaceholder использует числовые ID)
  const postId = Number(params.id);
  if (isNaN(postId)) return notFound();
  try {
    const post = await GetById(postId);
    return (
      <div className="container mx-auto">
        <article className="bg-amber-100">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-500 mb-6">{post.userId}</p>
          <p className="whitespace-pre-line">{post.body}</p>
        </article>
      </div>
    );
  } catch {
    return notFound();
  }
}
