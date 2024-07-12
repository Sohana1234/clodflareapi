import { r2, parseBucketPath } from "../../../../utils/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";


export async function onRequestPost(context) {
    const key = parseBucketPath(context);

    const bucket = process.env.R2_BUCKET_NAME;

    const url = await getSignedUrl(r2, new PutObjectCommand({ Bucket: bucket, Key: key }));
 
    return c.json({ key, url });
}