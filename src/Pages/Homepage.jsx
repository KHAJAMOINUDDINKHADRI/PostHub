import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, PenSquare } from "lucide-react";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] items-center justify-center">
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted p-2 mb-4">
              <MessageSquare className="h-12 w-12" />
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Share Your Thoughts With The World
            </h1>

            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Create and readposts on our platform. Join our community
              and start sharing your ideas today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Link to="/posts" className="flex items-center px-8 py-4">
                  Browse Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </button>
              <button className="flex items-center bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
                <Link to="/create" className="flex items-center px-8 py-4">
                  <PenSquare className="mr-2 h-4 w-4" />
                  Create Post
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
