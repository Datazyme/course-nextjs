//allows reuse of functions
//fetches data from website jsonPlaceholder
export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
