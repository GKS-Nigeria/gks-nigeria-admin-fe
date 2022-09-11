
export interface IApiResponse {
    data: any;
    success: true;
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
    created_at: string;
    updated_at: string;
    __V: number;
}
