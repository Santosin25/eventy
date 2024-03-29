import { generateReactHelpers } from "@uploadthing/react/hooks";

// @/app/api/uploadthing/core

import type { OurFileRouter } from "../app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
