import { JPHolderItem } from "../../entities/JPHolder/JPHolderItem";
import { BaseApi } from "../BaseApi";

export class JPHolderApi extends BaseApi{
    private readonly POSTS_PATH = "https://jsonplaceholder.typicode.com/posts";

    async getPosts(): Promise<JPHolderItem[]> {
        const rawData = await this.get(this.POSTS_PATH);

        return rawData.map((json: any) => JPHolderItem.fromJson(json));
    }

    async getDetailPost({id}: {id:number}): Promise<JPHolderItem> {
        const rawData = await this.get(this.POSTS_PATH + `/${id}`);

        return rawData.map((json: any) => JPHolderItem.fromJson(json));

    }
}