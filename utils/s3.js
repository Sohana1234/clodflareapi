import { S3Client } from "@aws-sdk/client-s3"

export const r2 = new S3Client({
    region: 'auto',
    endpoint: process.env.R2_ENDPOINT,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
})


export function parseBucketPath(context) {
  const pathSegments = (context.params.path || []);
  const path = decodeURIComponent(pathSegments.join("/"));

  return path;
}