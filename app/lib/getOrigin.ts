import {headers} from "next/headers";

export const getOrigin = async ():Promise<{origin:string}> => {
    const headersData = await headers();
    const host = headersData.get('host');
    const protocol = headersData.get('x-forwarded-proto');

    return {
        origin:`${protocol}://${host}`
    }
}
