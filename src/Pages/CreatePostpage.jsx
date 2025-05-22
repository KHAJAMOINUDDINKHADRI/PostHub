import React from "react";
import CreatePost from "../components/CreatePost";

export default function CreatePostpage() {
  return (
    <div className="container py-8 md:py-12 max-w-3xl mx-auto">
      <div className="flex flex-col items-center text-center gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Create a New Post</h1>
        <p className="text-muted-foreground">
          Share your thoughts with the community.
        </p>
      </div>

      <CreatePost />
    </div>
  );
}
