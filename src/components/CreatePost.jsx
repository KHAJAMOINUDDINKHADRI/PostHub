import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(100, {
      message: "Title must not exceed 100 characters.",
    }),
  body: z
    .string()
    .min(10, {
      message: "Content must be at least 10 characters.",
    })
    .max(1000, {
      message: "Content must not exceed 1000 characters.",
    }),
});

export default function CreatePost() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            ...values,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      await response.json();
      setShowSuccess(true);
      form.reset();

      // Redirect to the new post after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/posts");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      form.setError("root", {
        message: "Failed to create post. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      {showSuccess && (
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center z-10 rounded-lg">
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Post Created!</h3>
            <p className="text-muted-foreground">Redirecting to posts...</p>
          </div>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter post title"
            className="w-full px-3 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            {...form.register("title")}
          />
          {form.formState.errors.title && (
            <p className="text-sm text-destructive">
              {form.formState.errors.title.message}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            A clear and concise title for your post.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="body" className="text-sm font-medium">
            Content
          </label>
          <textarea
            id="body"
            placeholder="Write your post content here..."
            className="w-full min-h-32 px-3 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            {...form.register("body")}
          />
          {form.formState.errors.body && (
            <p className="text-sm text-destructive">
              {form.formState.errors.body.message}
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Share your thoughts, ideas or questions.
          </p>
        </div>

        {form.formState.errors.root && (
          <p className="text-sm text-destructive">
            {form.formState.errors.root.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Creating Post..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
