import { notFound } from "next/navigation";

/**
 * Catch-all route that forces notFound() for any unmatched path under [lang].
 * This ensures the [lang]/layout.tsx stays active and [lang]/not-found.tsx is used.
 */
export default function CatchAll() {
   notFound();
}
