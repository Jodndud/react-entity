import { useCallback, useEffect, useState } from "react";
import type { JPHolderItem } from "../entities/jPHolder/JPHolderItem";
import { JPHolderApi } from "../api/jPHolder/JPHolderApi";

export function useGetPosts() {
    const [posts, setPosts] = useState<JPHolderItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const api = new JPHolderApi();

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            
            const data = await api.getPosts();
            setPosts(data);
        } catch (error) {
            setError("데이터를 불러오는 중 오류가 발생했습니다.")
            console.error(error)
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

    return { posts, loading, error, refetch: fetchPosts };
}