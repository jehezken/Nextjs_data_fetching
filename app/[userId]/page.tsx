import React, { Suspense } from "react";
import getUser from "@/utils/getUser";
import getUserPosts from "@/utils/getUserPosts";
import UserPosts from "@/components/UserPosts";
import type { Metadata } from "next";

type Params = {
   params: {
      userId: string;
   };
};

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
   const userData: Promise<User> = getUser(userId);
   const userPostData: Promise<any> = getUserPosts(userId);
   const [user, userPosts] = await Promise.all([userData, userPostData]);

   return {
      title: user.name,
      description: `This is the page of ${user.name}`,
   };
}

export default async function UserPage({ params: { userId } }: Params) {
   const userData: Promise<User> = getUser(userId);
   const userPostData: Promise<any> = getUserPosts(userId);
   const [user, userPosts] = await Promise.all([userData, userPostData]);

   return (
      <div className="max-w-7xl w-full h-dvh flex flex-col justify-center mx-auto p-6">
         <h2 className="text-2xl flex items-center space-x-2 mb-5">{user.name}</h2>
         <Suspense fallback={<h2>Loading...</h2>}>
            <UserPosts promise={userPosts} />
         </Suspense>
      </div>
   );
}
