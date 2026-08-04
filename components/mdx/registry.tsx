import type { MDXComponents } from "mdx/types";
import { InlineLink } from "../atoms/InlineLink";
import Callout from "./Callout";
import CodeBlock from "./CodeBlock";
import MDXImage from "./Image";
import { TableComponents } from "./Table";

const mdxComponents: MDXComponents = {
   // Override default HTML elements
   h1: (props) => (
      <h1
         className="text-3xl md:text-4xl font-bold text-body mt-10 mb-4 first:mt-0"
         {...props}
      />
   ),
   h2: (props) => (
      <h2
         id={props.id}
         className="text-2xl md:text-3xl font-bold text-body mt-10 mb-4 border-b border-subtle/50 pb-2 scroll-mt-24"
         {...props}
      />
   ),
   h3: (props) => (
      <h3
         id={props.id}
         className="text-xl md:text-2xl font-semibold text-body mt-8 mb-3 scroll-mt-24"
         {...props}
      />
   ),
   h4: (props) => (
      <h4
         id={props.id}
         className="text-lg md:text-xl font-semibold text-body mt-6 mb-2 scroll-mt-24"
         {...props}
      />
   ),
   p: (props) => <p className="text-body/90 leading-relaxed mb-4" {...props} />,
   a: (props) => <InlineLink {...props} />,
   ul: (props) => (
      <ul className="list-disc list-inside space-y-2 mb-4 ml-4" {...props} />
   ),
   ol: (props) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 ml-4" {...props} />
   ),
   li: (props) => <li className="text-body/90 leading-relaxed" {...props} />,
   blockquote: (props) => (
      <blockquote
         className="border-l-4 border-primary pl-4 my-4 italic text-body/80"
         {...props}
      />
   ),
   pre: (props) => <CodeBlock {...props} />,
   hr: (props) => <hr className="my-8 border-subtle/50" {...props} />,
   strong: (props) => <strong className="font-bold text-body" {...props} />,
   em: (props) => <em className="italic" {...props} />,
   img: (props) => <MDXImage {...props} />,

   // Custom components
   Callout,
   Image: MDXImage,
   Table: TableComponents.Table,
   Thead: TableComponents.Thead,
   Tbody: TableComponents.Tbody,
   Tr: TableComponents.Tr,
   Th: TableComponents.Th,
   Td: TableComponents.Td,
};

export default mdxComponents;
