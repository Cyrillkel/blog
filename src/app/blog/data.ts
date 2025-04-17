export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function GetPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Faild to fetch posts");
  return res.json();
}

export async function GetById(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Faild to fetch posts");
  return res.json();
}

// export type Post = {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
// };

// export const posts: Post[] = [
//   { id: "1", title: "Пост 1", description: "Описание 1", date: "2023-10-01" },
//   { id: "2", title: "Пост 2", description: "Описание 2", date: "2023-10-02" },
//   { id: "3", title: "Пост 3", description: "Описание 3", date: "2023-10-03" },
// ];
