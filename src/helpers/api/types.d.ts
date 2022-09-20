
export interface IApiResponse {
    data: any;
    success: true;
    jwt: string;
    message: string;
    results: string;
    branch: string | any;
    admins: string;
    access_code: string;
}

export interface IApiSuccessResponse extends IApiResponse {
    success: true;
}

export interface IApiErrorResponse {
    statusCode: number;
    message: string
}

export interface Document {
    _id: string;
    createdAt: string;
    updatedAt: string;
    results: string;
    __V: number;
}
