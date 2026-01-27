import type { JSONPosts } from "../../type/JSONPosts";
import { BaseEntity } from "../BaseEntity";

export class JPHolderItem extends BaseEntity{
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor({ id, userId, title, body }: JSONPosts) {
        super();
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }

    static fromJson(json: any): JPHolderItem {
        return new JPHolderItem(json);
    }
}