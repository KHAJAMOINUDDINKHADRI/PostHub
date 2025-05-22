import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, User, AlertCircle } from "lucide-react";
import { usePost } from "../hooks/usePost";

export default function PostDetailpage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = id ? parseInt(id, 10) : null;
  const { post, isLoading, error } = usePost(postId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-muted animate-pulse rounded" />
            <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
            <div className="h-32 bg-muted animate-pulse rounded" />
            <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <h3 className="font-semibold">Error</h3>
            </div>
            <p className="mt-2 text-sm">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <button
              onClick={() => navigate("/posts")}
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to posts
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>
                  User #{post.userId} • Post #{post.id}
                </span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{post.body}</p>
          </div>

          <div className="border-t pt-6 flex justify-between">
            <button
              onClick={() => navigate("/posts")}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-muted rounded-md hover:bg-muted/80 transition-colors"
            >
              Back to Posts
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
