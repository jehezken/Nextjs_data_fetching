export default async function getUserPosts(userId: string) {
   const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
   if (!result.ok) throw new Error(`failed to fetch ${result.statusText}`);
   return result.json();
}
