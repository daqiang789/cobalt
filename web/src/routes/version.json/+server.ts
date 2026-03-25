import { json } from "@sveltejs/kit";
import { getCommit, getBranch, getVersion } from "@imput/version-info";

export async function GET() {
    return json({
        commit: await getCommit(),
        branch: await getBranch(),
        remote: "unknown", // 这里强制写死，不让它去读Git远程信息，解决报错
        version: await getVersion()
    });
}

export const prerender = true;
