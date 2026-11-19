export default function TaskHeader() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EAF3ED] flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="6" height="6" rx="1" />
          <path d="m13 5h8"></path>
          <path d="m13 12h8"></path>
          <path d="m13 19h8"></path>
          <path d="m3 17 2 2 4-4" />
        </svg>
      </div>

      <div>
        <h1 className="text-[24px]  font-semibold text-[#213D35]">My tasks</h1>
      </div>
    </div>
  );
}
