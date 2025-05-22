import { Link } from "react-router-dom";
import { MessageSquare, Clock, User } from "lucide-react";

export default function PostCard({ post }) {
  return (
    <div className="group relative rounded-lg border p-6 hover:border-foreground/20 transition-colors flex flex-col h-full">
      <div className="flex flex-col flex-grow">
        <div className="space-y-2 mb-4">
          <h2 className="font-semibold text-xl line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-3">{post.body}</p>
        </div>

        <div className="mt-auto pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Post #{post.id}</span>
            </div>

            <Link
              to={`/posts/${post.id}`}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-md hover:bg-primary/20 transition-colors"
            >
              Read more
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
