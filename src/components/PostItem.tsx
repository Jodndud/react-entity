import { useState } from "react";
import type { JPHolderItem } from "../entities/jPHolder/JPHolderItem";
import { useGetPostDetail } from "../hooks/useGetPostDetail";

export default function PostItem({ item }: { item: JPHolderItem}){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { post, loading, fetchPostDetail } = useGetPostDetail()

    const handle더보기 = () => {
        if(!isOpen){
            fetchPostDetail(item.id)
        }
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <p
              onClick={handle더보기}
            >{item.summary}</p>
            {loading && <p>불러오는 중...</p>}
            {isOpen && post && (
              <div>{item.body}</div>
            )}
            <hr />
        </div>
    )

}