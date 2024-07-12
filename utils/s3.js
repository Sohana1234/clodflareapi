import { S3Client } from "@aws-sdk/client-s3"

export function r2Factory(env) {
  return new S3Client({
    region: 'auto',
    endpoint: env.R2_ENDPOINT,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    },
  });
}

export function parseBucketPath(params) {
  const pathSegments = (params.path || []);
  const path = decodeURIComponent(pathSegments.join("/"));

  return path;
}