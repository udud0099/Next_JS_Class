import Link from "next/link";

export default function CommonButton({
  common_btn_context,
  common_btn_link = "#",
  customStle,
}) {
  return (
    <>
      <Link href={common_btn_link}>
        <button
          className={`${customStle} py-2 px-6 bg-primary text-white rounded-xl uppercase cursor-pointer`}
        >
          {common_btn_context}
        </button>
      </Link>
    </>
  );
}
