import { useState, useEffect } from 'react';

export function usePost(postId) {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            if (!postId) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            } finally {
                setIsLoading(false);
            }
        };

        loadPost();
    }, [postId]);

    return { post, isLoading, error };
} 