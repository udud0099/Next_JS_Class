export default function CommonButton({ common_btn_context, common_btn_link }) {
  return (
    <>
      <button className="py-2 px-6 bg-black text-white rounded-xl uppercase cursor-pointer">
        {common_btn_context}
      </button>
    </>
  );
}
