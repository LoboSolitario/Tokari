export default function configOptions(method, headers, options){
    options.headers = headers == null ? new Headers() : headers;
    options.method = method
}