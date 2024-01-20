import { getSortedPostsData } from "@/lib/posts";
import ListItem from "./ListItem";

export default function Posts() {
  const posts = getSortedPostsData();
  //JSON.stringify(post)replaced by ListItem used to test data getting
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="next-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post}></ListItem>
        ))}
      </ul>
    </section>
  );
}
