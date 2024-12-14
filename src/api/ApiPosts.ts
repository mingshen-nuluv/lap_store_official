import ApiBase from "./ApiBase";

class ApiPosts extends ApiBase {
    path: string;
    constructor() {
        super();
        this.path = "posts";
    }

    list(data: any) {
        return this.httpGet(this.path, data, null);
    }
}

export const apiPosts = new ApiPosts();