type Props = {
   promise: Promise<Post>;
};

export default async function UserPosts({ promise }: Props) {
   const post = await promise;
   return (
      <>
         <article key={post.id}>
            <h3 className="text-lg mb-2.5">{post.title}</h3>
            <p className="text-sm max-w-[60ch]">{post.body}</p>
         </article>
      </>
   );
}
