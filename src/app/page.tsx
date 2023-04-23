import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <Image
        src="/logo.png"
        alt="JH"
        className="object-contain"
        width={200}
        height={200}
      />
    </main>
  );
}
