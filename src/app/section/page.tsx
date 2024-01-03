import HomeLayout from "@/components/HomeLayout";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My App | Section",
  description: "A different description for my section page!",
};

export default function Section() {
  return (
    <HomeLayout title="section">
        <div className="py-6">Content of my section page:</div>
          <div className="h-[120svh] border-2 rounded-xl p-5 flex">
            <div className="m-auto">Long content for testing scroll behaviour</div>
          </div>
    </HomeLayout>
  );
}
