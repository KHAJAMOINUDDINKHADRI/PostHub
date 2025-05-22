import { useState, useEffect } from 'react';

export function usePosts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPosts = async () => {
        try {
            setIsLoading(true);
            setError(null);
            // Replace this with your actual API call
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return { posts, isLoading, error, loadPosts };
} 