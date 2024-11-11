import Image from "next/image";


export default function Home() {
  return (
    
      <main>
      <Image              
              src="/eu.jpeg"
              alt="Vercel logomark"
              width={20}
              height={20}
              priority
            />
      </main>
    
    
  );
}
