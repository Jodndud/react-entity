import { useCallback, useState } from "react";
import { JPHolderApi } from "../api/jPHolder/JPHolderApi";
import type { JPHolderItem } from "../entities/jPHolder/JPHolderItem";

export function useGetPostDetail(){
    const [post, setPost] = useState<JPHolderItem | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const api = new JPHolderApi();

    const fetchPostDetail = useCallback(async (id: number) => {
        try {
            setLoading(true);
            setError(null);

            const data = await api.getPostDetail({id});
            setPost(data)

        } catch (e) {
            console.error(e)
            setError("상세 데이터를 불러오는 중 오류가 발생")
        } finally {
            setLoading(false)
        }
    }, [])

    return { post, loading, error, fetchPostDetail };
}