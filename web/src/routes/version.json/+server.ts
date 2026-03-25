import { json } from "@sveltejs/kit";
import { getCommit, getBranch, getRemote, getVersion } from "@imput/version-info";

export async function GET() {
    let remoteInfo = "unknown";
    try {
        remoteInfo = await getRemote();
    } catch (e) {
        console.warn("Vercel env: skipped remote parsing");
    }

    return json({
        commit: await getCommit(),
        branch: await getBranch(),
        remote: remoteInfo,
        version: await getVersion()
    });
}

export const prerender = true;
