import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          <MessageSquare className="h-5 w-5" />
          <span>PostHub</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Posts
          </Link>
          <Link
            to="/create"
            className="text-md font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
}
