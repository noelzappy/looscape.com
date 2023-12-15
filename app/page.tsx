import Announcement from "@/components/Announcement";
import { AnnouncementForm } from "@/components/AnnouncementForm";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <div className="max-w-5xl mx-auto flex md:items-center md:justify-center p-10 h-[85vh] flex-col">
        <div className="flex items-center justify-center mb-10">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <Announcement />
        <AnnouncementForm />
      </div>
      {/* <div className="mt-10 flex items-center justify-center">
      </div>
      <div className="mt-10">
      </div> */}
    </main>
  );
}
