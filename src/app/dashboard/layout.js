import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div
        className="bg-slate-400 flex flex-col items-center gap-3 pt-10"
        style={{ width: "25%", height: "100vh" }}
      >
        <Link
          href={"/dashboard/profile"}
          className="font-semibold hover:border-b-2 hover:border-red-500 "
        >
          Go to Profile
        </Link>
        <Link
          href={"/dashboard/myblogs"}
          className="font-semibold hover:border-b-2 hover:border-red-500 "
        >
          Go to My Blogs
        </Link>
        <Link
          href={"/dashboard/settings"}
          className="font-semibold hover:border-b-2 hover:border-red-500 "
        >
          Go to Settings
        </Link>
      </div>
      <div className="bg-slate-300" style={{ width: "75%", height: "100vh" }}>
        {children}
      </div>
    </div>
  );
}
