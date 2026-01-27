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