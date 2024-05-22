import Link from "next/link";
import { dancingScript } from "@/styles/fonts";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col md:px-2">
      <div className="fixed left-0 top-0 z-[-10] w-[27rem] h-screen">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        >
          <source src="assets/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Link className="m-6" href="/">
        <div className={`${dancingScript.className} text-white text-3xl`}>
          Share Notes
        </div>
      </Link>
    </div>
  );
}
