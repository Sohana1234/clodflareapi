import { r2Factory, parseBucketPath } from "../../../../utils/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";


export async function onRequestPost(context) {
    const r2 = r2Factory(context.env);
    const key = parseBucketPath(context.params);
    const bucket = context.env.R2_BUCKET_NAME;
    const url = await getSignedUrl(r2, new PutObjectCommand({ Bucket: bucket, Key: key }));

    return new Response(JSON.stringify({ key, url }), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function onRequestGet(context) {
    const r2 = r2Factory(context.env);
    const key = parseBucketPath(context.params);
    const bucket = context.env.R2_BUCKET_NAME;
    const url = await getSignedUrl(r2, new GetObjectCommand({ Bucket: bucket, Key: key }));

    return new Response(JSON.stringify({ key, url }), {
        headers: { "Content-Type": "application/json" },
    });
}