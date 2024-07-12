import { r2Factory, parseBucketPath } from "../../../../utils/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";


export async function onRequestPost(context) {
    const r2 = r2Factory(context.env);
    const key = parseBucketPath(context);

    const bucket = context.env.R2_BUCKET_NAME;

    const url = await getSignedUrl(r2, new PutObjectCommand({ Bucket: bucket, Key: key }));
 
    return c.json({ key, url });
}