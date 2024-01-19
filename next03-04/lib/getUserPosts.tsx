//server side rendered gets cached after first call
export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } } //updates data on page after 60s called incremental static regeneration
  );

  if (!res.ok) return undefined;

  return res.json();
}
