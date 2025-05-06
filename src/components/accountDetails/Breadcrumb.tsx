import { mockAccountDetails } from "@/data/mockData";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
      <Link to="/" className="hover:text-white">
        Dashboard
      </Link>
      <span>//</span>
      <Link to="/" className="hover:text-white">
        Accounts
      </Link>
      <span>//</span>
      <span className="text-primary">{mockAccountDetails.name}</span>
    </div>
  );
}
