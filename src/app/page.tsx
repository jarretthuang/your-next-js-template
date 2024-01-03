import HomeLayout from "@/components/HomeLayout";
import type { Metadata } from "next";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const metadata: Metadata = {
  title: "My App",
  description: "This my Next.js app!",
};

export default function Home() {
  return (
    <HomeLayout>
      <div className="flex h-[70svh] w-full overflow-hidden">
        <a
          href="/section"
          className="m-auto flex cursor-pointer select-none rounded-xl bg-white/40 dark:bg-stone-800/80 shadow-lg p-10"
        >
          <div className="m-auto text-3xl whitespace-nowrap">
            Open section <ArrowForwardIcon />
          </div>
        </a>
      </div>
    </HomeLayout>
  );
}
