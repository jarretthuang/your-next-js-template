import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Copyright from "./Copyright";

const font = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "700"]
});

export default function HomeLayout({
  children,
  title = "",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <main
      className={`${font.className} flex h-fit min-h-svh w-screen flex-col  items-center justify-between bg-gradient-to-br from-green-100 to-purple-100 p-6 text-slate-700 dark:from-black dark:to-gray-800 dark:text-slate-100`}
    >
      <div className="flex w-full max-w-6xl select-none flex-row content-center pb-5">
        <Image
          src="/favicon.ico"
          alt="Logo"
          className="p-1"
          width={40}
          height={40}
        />
        <div className="inline whitespace-nowrap px-2 text-3xl font-semibold">
          <a href="/" className="font-bold hover:opacity-80">
            My Next.js App
          </a>
          <span>{title && ` / ${title}`}</span>
        </div>
      </div>
      <div className="h-fit min-h-[70svh] w-full max-w-6xl">{children}</div>
      <div className="flex w-full max-w-6xl p-5">
        <div className="m-auto">
          <Copyright />
        </div>
      </div>
    </main>
  );
}
