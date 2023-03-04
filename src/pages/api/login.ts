export function loginRequest() {
    return new Promise<LoginResponse>(() => {{token: "hello"}})
}

interface LoginResponse{
    token: string;
}