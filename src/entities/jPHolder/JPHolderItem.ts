import type { Post } from "../../type/Post";
import { BaseEntity } from "../BaseEntity";

export class JPHolderItem extends BaseEntity{
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor({ id, userId, title, body }: Post) {
        super();
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }

    get summary(): string {
        if (this.body.length >= 50) {
            return this.body.substring(0, 50) + "... 더보기";
        }
        return this.body;
    }

    static fromJson(json: any): JPHolderItem {
        return new JPHolderItem(json);
    }
}