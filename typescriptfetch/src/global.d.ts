type TDataError={
   data:
   { 
    statusCode:number
    messages:string[]
    }
}

type TDataSuccess <T>={
    data:T
}

interface IResponse {
    ok:true;
    data: TOk extends true ? TDataSuccess : TDataError
}

declare function fetch<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T>

// Response