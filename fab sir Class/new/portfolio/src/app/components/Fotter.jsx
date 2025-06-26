import Link from "next/link";
import CommonButton from "./CommonButton";

export default function Fotter() {
  return (
    <>
      <div className="mt-8">
        <div className="flex gap-x-8 gap-y-4 flex-wrap flex-col lg:flex-row border-t py-4 justify-between items-center">
          <p className="text-secondary text-[14px]">
            © 2025 Made with Material Tailwind by Creative Tim. Distributed by
            ThemeWagon
          </p>
          <div className="flex gap-4 items-center">
            <Link href="">Home</Link>
            <Link href="">About Us</Link>
            <Link href="">Blog</Link>
            <Link href="">Service</Link>
            <CommonButton common_btn_context="subscribe" />
          </div>
        </div>
      </div>
    </>
  );
}
