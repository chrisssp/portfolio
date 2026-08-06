import path from "node:path";
import { renderOgCover, renderPost } from "./diagrams/engine";
import { manifest } from "./diagrams/manifest";

function postFilter(): string | null {
   const flag = process.argv.find((a) => a.startsWith("--post="));
   return flag ? flag.slice("--post=".length) : null;
}

async function main() {
   const only = postFilter();
   const outRoot = path.resolve(process.cwd(), "public/blog");
   const posts = only ? manifest.filter((p) => p.slug === only) : manifest;

   if (only && posts.length === 0) {
      console.error(`✗ No hay post '${only}' en el manifest`);
      process.exit(1);
   }

   for (const post of posts) {
      console.log(`\n── ${post.slug} ──`);
      const specs = [
         ...(post.cover ? [post.cover] : []),
         ...post.diagrams,
      ].filter((spec, i, arr) => arr.findIndex((s) => s.id === spec.id) === i);
      await renderPost(post.slug, specs, outRoot);
      const ogSpec = post.og ?? post.cover;
      if (ogSpec) {
         await renderOgCover(ogSpec, post.slug, outRoot);
      }
   }
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
   main().catch((err) => {
      console.error(err);
      process.exit(1);
   });
}
