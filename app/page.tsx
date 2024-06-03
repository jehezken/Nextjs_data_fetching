import React from "react";
import Link from "next/link";
import getAllUsers from "@/utils/getAllUsers";
import { MoveLeftIcon } from "lucide-react";

export default async function Home() {
   const userData: Promise<User[]> = getAllUsers();
   const users = await userData;
   return (
      <section>
         <div className="max-w-7xl w-full h-dvh flex flex-col justify-center mx-auto p-6">
            <h2 className="text-2xl flex items-center space-x-2 mb-5">
               <MoveLeftIcon className="size-6 mt-1" />
               <Link href="/">Back to home</Link>
            </h2>
            {users.map((user) => (
               <p key={user.id} className="pl-16 mb-1">
                  <Link href={`/${user.id}`} className="border-b hover:opacity-70 transition-all hover:border-transparent">
                     {user.name}
                  </Link>
               </p>
            ))}
         </div>
      </section>
   );
}
