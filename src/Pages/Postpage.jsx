import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import { RefreshCw, AlertCircle } from "lucide-react";

export default function Postpage() {
  const { posts, isLoading, error, loadPosts } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h1 className="text-4xl font-bold">All Posts</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse and search through all available posts.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={() => loadPosts()}
              disabled={isLoading}
              className="p-2 rounded-md border hover:bg-muted transition-colors disabled:opacity-50"
            >
              <RefreshCw
                className={`h-5 w-5 ${isLoading ? "animate-spin" : ""}`}
              />
              <span className="sr-only">Refresh</span>
            </button>
          </div>

          {error && (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                <h3 className="font-semibold">Error</h3>
              </div>
              <p className="mt-2 text-sm">{error.message}</p>
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="space-y-3 rounded-lg border p-6">
                    <div className="h-8 w-3/4 bg-muted animate-pulse rounded" />
                    <div className="h-24 bg-muted animate-pulse rounded" />
                    <div className="h-8 bg-muted animate-pulse rounded" />
                  </div>
                ))}
            </div>
          ) : (
            <>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No posts found. Try a different search term.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
