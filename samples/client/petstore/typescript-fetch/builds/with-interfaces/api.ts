// tslint:disable
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export const BASE_PATH = "http://petstore.swagger.io/v2".replace(/\/+$/, "");

/**
 * Describes the result of uploading an image resource
 * @export
 * @interface ApiResponse
 */
export interface ApiResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiResponse
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiResponse
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiResponse
     */
    message?: string;
}

/**
 * A category for a pet
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    name?: string;
}

/**
 * An order for a pets from the pet store
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    petId?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    quantity?: number;
    /**
     * 
     * @type {Date}
     * @memberof Order
     */
    shipDate?: Date;
    /**
     * Order Status
     * @type {string}
     * @memberof Order
     */
    status?: Order.StatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Order
     */
    complete?: boolean;
}

/**
 * @export
 * @namespace Order
 */
export namespace Order {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Placed = <any> 'placed',
        Approved = <any> 'approved',
        Delivered = <any> 'delivered'
    }
}

/**
 * A pet for sale in the pet store
 * @export
 * @interface Pet
 */
export interface Pet {
    /**
     * 
     * @type {number}
     * @memberof Pet
     */
    id?: number;
    /**
     * 
     * @type {Category}
     * @memberof Pet
     */
    category?: Category;
    /**
     * 
     * @type {string}
     * @memberof Pet
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Pet
     */
    photoUrls: Array<string>;
    /**
     * 
     * @type {Array<Tag>}
     * @memberof Pet
     */
    tags?: Array<Tag>;
    /**
     * pet status in the store
     * @type {string}
     * @memberof Pet
     */
    status?: Pet.StatusEnum;
}

/**
 * @export
 * @namespace Pet
 */
export namespace Pet {
    /**
     * @export
     * @enum {string}
     */
    export enum StatusEnum {
        Available = <any> 'available',
        Pending = <any> 'pending',
        Sold = <any> 'sold'
    }
}

/**
 * A tag for a pet
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     * 
     * @type {number}
     * @memberof Tag
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Tag
     */
    name?: string;
}

/**
 * A User who is purchasing from the pet store
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     * User Status
     * @type {number}
     * @memberof User
     */
    userStatus?: number;
}


export interface AddPetRequest {
    pet: Pet;
}

export interface DeletePetRequest {
    petId: number;
    apiKey?: string;
}

export interface FindPetsByStatusRequest {
    status: Array<'available' | 'pending' | 'sold'>;
}

export interface FindPetsByTagsRequest {
    tags: Array<string>;
}

export interface GetPetByIdRequest {
    petId: number;
}

export interface UpdatePetRequest {
    pet: Pet;
}

export interface UpdatePetWithFormRequest {
    petId: number;
    name?: string;
    status?: string;
}

export interface UploadFileRequest {
    petId: number;
    additionalMetadata?: string;
    file?: any;
}

export interface DeleteOrderRequest {
    orderId: string;
}

export interface GetOrderByIdRequest {
    orderId: number;
}

export interface PlaceOrderRequest {
    order: Order;
}

export interface CreateUserRequest {
    user: User;
}

export interface CreateUsersWithArrayInputRequest {
    user: Array<User>;
}

export interface CreateUsersWithListInputRequest {
    user: Array<User>;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface UpdateUserRequest {
    username: string;
    user: User;
}


/**
 * This is the base class for all generated API classes.
 */
export class BaseAPI {

    private middleware: Middleware[];

    constructor(protected configuration = new Configuration()) {
        this.middleware = configuration.middleware;
    }

    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]) {
        const next = this.clone<T>();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }

    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware<T>(...middlewares);
    }

    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware<T>(...middlewares);
    }

    protected async request<T>(context: RequestOpts): Promise<T> {
        const { url, init } = this.createFetchParams(context);
        const response = await this.fetchApi(url, init);
        if (response.status >= 200 && response.status < 300) {
            switch(context.responseType) {
                case 'JSON':
                    const result = await response.json() as T;
                    return transformPropertyNames(result, context.modelPropertyNaming);
                case 'text':
                    return await response.text() as any as T;
                default:
                    return response as any as T;
            }
        }
        throw response;
    }

    private createFetchParams(context: RequestOpts) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + querystring(context.query);
        }
        const body = context.body instanceof FormData ? context.body : JSON.stringify(context.body);
        const init = {
            method: context.method,
            headers: context.headers,
            body,
        };
        return { url, init };
    }

    private fetchApi = async (url: string, init: RequestInit) => {
        let fetchParams = { url, init };
        for (const middleware of this.middleware) {
            if (middleware.pre) {
                fetchParams = await middleware.pre(this.fetchApi, fetchParams.url, fetchParams.init) || fetchParams;
            }
        }
        let response = await this.configuration.fetchApi(fetchParams.url, fetchParams.init);
        for (const middleware of this.middleware) {
            if (middleware.post) {
                response = await middleware.post(this.fetchApi, url, init, response.clone()) || response;
            }
        }
        return response;
    }

    /**
     * https://swagger.io/docs/specification/2-0/describing-responses/
     *
     * If the response type for a given API is a 'string' we need to avoid
     * parsing the response as json because JSON.parse("some string") will
     * fail when the string isn't actually JSON.
     */
    protected getResponseType(returnType: string): ResponseType {
        switch (returnType) {
            case 'string':
                return 'text'
            default:
                return 'JSON'
        }
    }

    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone<T extends BaseAPI>(this: T): T {
        const constructor = this.constructor as any;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
};

export class RequiredError extends Error {
    name = 'RequiredError';
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}


/**
 * no description
 */
export class PetApi extends BaseAPI {

    /**
     * Add a new pet to the store
     */
    async addPet(requestParameters: AddPetRequest): Promise<Response> {
        if (requestParameters.pet === null || requestParameters.pet === undefined) {
            throw new RequiredError('pet','Required parameter requestParameters.pet was null or undefined when calling addPet.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        return this.request<Response>({
            path: `/pet`,
            method: 'POST',
            headers: headerParameters,
            body: requestParameters.pet,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Deletes a pet
     */
    async deletePet(requestParameters: DeletePetRequest): Promise<Response> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling deletePet.');
        }

        const headerParameters: HTTPHeaders = {};

        if (requestParameters.apiKey !== undefined && requestParameters.apiKey !== null) {
            headerParameters['api_key'] = String(requestParameters.apiKey);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        return this.request<Response>({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'DELETE',
            headers: headerParameters,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Multiple status values can be provided with comma separated strings
     * Finds Pets by status
     */
    async findPetsByStatus(requestParameters: FindPetsByStatusRequest): Promise<Array<Pet>> {
        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new RequiredError('status','Required parameter requestParameters.status was null or undefined when calling findPetsByStatus.');
        }

        const queryParameters: HTTPQuery = {};

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status.join(COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        return this.request<Array<Pet>>({
            path: `/pet/findByStatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            responseType: this.getResponseType('Array<Pet>'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * Finds Pets by tags
     */
    async findPetsByTags(requestParameters: FindPetsByTagsRequest): Promise<Array<Pet>> {
        if (requestParameters.tags === null || requestParameters.tags === undefined) {
            throw new RequiredError('tags','Required parameter requestParameters.tags was null or undefined when calling findPetsByTags.');
        }

        const queryParameters: HTTPQuery = {};

        if (requestParameters.tags) {
            queryParameters['tags'] = requestParameters.tags.join(COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        return this.request<Array<Pet>>({
            path: `/pet/findByTags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            responseType: this.getResponseType('Array<Pet>'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Returns a single pet
     * Find pet by ID
     */
    async getPetById(requestParameters: GetPetByIdRequest): Promise<Pet> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling getPetById.');
        }

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        return this.request<Pet>({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'GET',
            headers: headerParameters,
            responseType: this.getResponseType('Pet'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Update an existing pet
     */
    async updatePet(requestParameters: UpdatePetRequest): Promise<Response> {
        if (requestParameters.pet === null || requestParameters.pet === undefined) {
            throw new RequiredError('pet','Required parameter requestParameters.pet was null or undefined when calling updatePet.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        return this.request<Response>({
            path: `/pet`,
            method: 'PUT',
            headers: headerParameters,
            body: requestParameters.pet,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Updates a pet in the store with form data
     */
    async updatePetWithForm(requestParameters: UpdatePetWithFormRequest): Promise<Response> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling updatePetWithForm.');
        }

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const formData = new FormData();
        if (requestParameters.name !== undefined) {
            formData.append('name', requestParameters.name as any);
        }

        if (requestParameters.status !== undefined) {
            formData.append('status', requestParameters.status as any);
        }

        return this.request<Response>({
            path: `/pet/{petId}`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            body: formData,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * uploads an image
     */
    async uploadFile(requestParameters: UploadFileRequest): Promise<ApiResponse> {
        if (requestParameters.petId === null || requestParameters.petId === undefined) {
            throw new RequiredError('petId','Required parameter requestParameters.petId was null or undefined when calling uploadFile.');
        }

        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("petstore_auth", ["write:pets", "read:pets"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const formData = new FormData();
        if (requestParameters.additionalMetadata !== undefined) {
            formData.append('additionalMetadata', requestParameters.additionalMetadata as any);
        }

        if (requestParameters.file !== undefined) {
            formData.append('file', requestParameters.file as any);
        }

        return this.request<ApiResponse>({
            path: `/pet/{petId}/uploadImage`.replace(`{${"petId"}}`, encodeURIComponent(String(requestParameters.petId))),
            method: 'POST',
            headers: headerParameters,
            body: formData,
            responseType: this.getResponseType('ApiResponse'),
            modelPropertyNaming: 'camelCase',
        });
    }

}

/**
 * no description
 */
export class StoreApi extends BaseAPI {

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    async deleteOrder(requestParameters: DeleteOrderRequest): Promise<Response> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling deleteOrder.');
        }

        const headerParameters: HTTPHeaders = {};

        return this.request<Response>({
            path: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'DELETE',
            headers: headerParameters,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    async getInventory(): Promise<{ [key: string]: number; }> {
        const headerParameters: HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }

        return this.request<{ [key: string]: number; }>({
            path: `/store/inventory`,
            method: 'GET',
            headers: headerParameters,
            responseType: this.getResponseType('{ [key: string]: number; }'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    async getOrderById(requestParameters: GetOrderByIdRequest): Promise<Order> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling getOrderById.');
        }

        const headerParameters: HTTPHeaders = {};

        return this.request<Order>({
            path: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'GET',
            headers: headerParameters,
            responseType: this.getResponseType('Order'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Place an order for a pet
     */
    async placeOrder(requestParameters: PlaceOrderRequest): Promise<Order> {
        if (requestParameters.order === null || requestParameters.order === undefined) {
            throw new RequiredError('order','Required parameter requestParameters.order was null or undefined when calling placeOrder.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return this.request<Order>({
            path: `/store/order`,
            method: 'POST',
            headers: headerParameters,
            body: requestParameters.order,
            responseType: this.getResponseType('Order'),
            modelPropertyNaming: 'camelCase',
        });
    }

}

/**
 * no description
 */
export class UserApi extends BaseAPI {

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest): Promise<Response> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUser.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return this.request<Response>({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            body: requestParameters.user,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequest): Promise<Response> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUsersWithArrayInput.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return this.request<Response>({
            path: `/user/createWithArray`,
            method: 'POST',
            headers: headerParameters,
            body: requestParameters.user,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInput(requestParameters: CreateUsersWithListInputRequest): Promise<Response> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new RequiredError('user','Required parameter requestParameters.user was null or undefined when calling createUsersWithListInput.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return this.request<Response>({
            path: `/user/createWithList`,
            method: 'POST',
            headers: headerParameters,
            body: requestParameters.user,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<Response> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deleteUser.');
        }

        const headerParameters: HTTPHeaders = {};

        return this.request<Response>({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'DELETE',
            headers: headerParameters,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Get user by user name
     */
    async getUserByName(requestParameters: GetUserByNameRequest): Promise<User> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByName.');
        }

        const headerParameters: HTTPHeaders = {};

        return this.request<User>({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            responseType: this.getResponseType('User'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Logs user into the system
     */
    async loginUser(requestParameters: LoginUserRequest): Promise<string> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new RequiredError('username','Required parameter requestParameters.username was null or undefined when calling loginUser.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new RequiredError('password','Required parameter requestParameters.password was null or undefined when calling loginUser.');
        }

        const queryParameters: HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        const headerParameters: HTTPHeaders = {};

        return this.request<string>({
            path: `/user/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            responseType: this.getResponseType('string'),
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUser(): Promise<Response> {
        const headerParameters: HTTPHeaders = {};

        return this.request<Response>({
            path: `/user/logout`,
            method: 'GET',
            headers: headerParameters,
            modelPropertyNaming: 'camelCase',
        });
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<Response> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new RequiredError('username','Required parameter requestParameters.username was null or undefined when calling updateUser.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new RequiredError('user','Required parameter requestParameters.user was null or undefined when calling updateUser.');
        }

        const headerParameters: HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        return this.request<Response>({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'PUT',
            headers: headerParameters,
            body: requestParameters.user,
            modelPropertyNaming: 'camelCase',
        });
    }

}



export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export type FetchAPI = GlobalFetch['fetch'];

export interface ConfigurationParameters {
    basePath?: string; // override base path
    fetchApi?: FetchAPI; // override for fetch implementation
    middleware?: Middleware[]; // middleware to apply before/after fetch requests
    username?: string; // parameter for basic security
    password?: string; // parameter for basic security
    apiKey?: string | ((name: string) => string); // parameter for apiKey security
    accessToken?: string | ((name: string, scopes?: string[]) => string); // parameter for oauth2 security
}

export class Configuration {

    basePath: string;
    fetchApi: FetchAPI;
    middleware: Middleware[];
    username?: string;
    password?: string;
    apiKey?: (name: string) => string;
    accessToken?: (name: string, scopes?: string[]) => string;

    constructor(conf: ConfigurationParameters = {}) {
        this.basePath = conf.basePath !== undefined ? conf.basePath : BASE_PATH;
        this.fetchApi = conf.fetchApi || window.fetch.bind(window);
        this.middleware = conf.middleware || [];
        this.username = conf.username;
        this.password = conf.password;
        const { apiKey, accessToken } = conf;
        if (apiKey) {
            this.apiKey = typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        if (accessToken) {
            this.accessToken = typeof accessToken === 'function' ? accessToken : () => accessToken;
        }
    }
}

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> };
export type HTTPBody = Json | FormData;
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';

export interface FetchParams {
    url: string;
    init: RequestInit;
}

type ResponseType = 'JSON' | 'text';

interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
    responseType?: ResponseType;
    modelPropertyNaming: ModelPropertyNaming;
}

function querystring(params: HTTPQuery) {
    return Object.keys(params)
        .map((key) => {
            const value = params[key];
            if (value instanceof Array) {
                const multiValue = value.join(`&${encodeURIComponent(key)}=`);
                return `${encodeURIComponent(key)}=${multiValue}`;
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
        })
        .join('&');
}

export interface Middleware {
    pre?(fetch: FetchAPI, url: string, init: RequestInit): Promise<FetchParams | undefined | void>;
    post?(fetch: FetchAPI, url: string, init: RequestInit, response: Response): Promise<Response | undefined | void>;
}

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function toPascalCase(name: string) {
    return name
        .split('_')
        .map(capitalize)
        .join('');
}

function toCamelCase(name: string) {
    const pascalCase = toPascalCase(name);
    return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
}

function applyPropertyNameConverter(json: any, converter: (name: string) => string) {
    if (json instanceof Array) {
        json.forEach((value) => {
            if (typeof value === 'object') {
                return applyPropertyNameConverter(value, converter);
            }
        });
    } else {
        Object.keys(json).forEach((origKey) => {
            if (json.hasOwnProperty(origKey)) {
                let value = json[origKey];
                if (value instanceof Array || (value !== null && value.constructor === Object)) {
                    value = applyPropertyNameConverter(value, converter);
                }
                const newKey = converter(origKey);
                json[newKey] = json[origKey];
                delete json[origKey];
                json[newKey] = value;
            }
        });
    }
    return json;
}

function transformPropertyNames(json: any, modelPropertyNaming: ModelPropertyNaming) {
    switch (modelPropertyNaming) {
        case 'camelCase':
            return applyPropertyNameConverter(json, toCamelCase);

        case 'original':
        default:
            return json;
    }
}
