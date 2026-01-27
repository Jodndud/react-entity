## 객체 지향 API 호출

### 앤티티 구현
데이터가 화면에 보이기 전에 가공하거나 그대로 보여줄지를 결정

<b>부모 엔티티 구현</b>

모든 엔티티가 공통으로 가져야할 속성과 로직을 대비하기 위해 부모 클래스인 `BaseEntity`를 구현한다.
자식들은 모두 `BaseEntity`를 상속 받음
```ts
export abstract class BaseEntity {}
```

<b>(사용) 엔티티 구현</b>
1. 클래스 변수 정의
2. 생성자(constructor) 구현
3. 엔티티 함수 구현

```ts
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
```

### API 구현

#### 상속받을 부모 API 구현
모든 API 클래스가 사용가능한 로직을 여기서 사용,
axios 인터셉터를 주로 사용할 것 같다.

- `protected`: 상속받은 자식까지만 사용가능
- `private`: 나(BaseApi)만 사용 가능
- `public`: 아무나 사용 가능

```ts
export abstract class BaseApi {

    protected async get(url: string): Promise<any> {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP 에러: ${response.status}`)
            }
            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }

}
```

#### 사용 API 구현
테스트를 위해 `JSONPlaceHolder` API를 사용했다.

여기서 url를 사용해 api를 호출하고 데이터는 앤티티에서 가져와 사용한다.
(기존 타입 지정해서 넣는것과 다름)
```ts
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
```