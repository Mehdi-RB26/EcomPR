import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";


export default function Home() {
  const {data: session} = useSession();
  
 // if(!session) return;
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>
        Hello,<b> {session?.user?.name}</b>
        <h3>This is your admin side dashboard</h3>
      </h2>

      <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
        <img src={session?.user?.image} alt=""className="w-6 h-6 "/>

        <span className="px-2">
         {session?.user?.name}
        </span>
      
      </div>
    </div>
    </Layout>
  
}
