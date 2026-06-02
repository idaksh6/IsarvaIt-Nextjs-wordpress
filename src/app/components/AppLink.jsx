import NextLink from "next/link";

/**
 * Site-wide Link wrapper. Prefetch is disabled by default to avoid
 * preloading hero images and RSC payloads for routes not yet visited.
 */
export default function AppLink({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
