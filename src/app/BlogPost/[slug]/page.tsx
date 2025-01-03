// import React from "react";
// import matter from "gray-matter";
// import rehypeDocument from "rehype-document";
// import rehypeFormat from "rehype-format";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";
// import fs from "fs";
// import path from "path";
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
// import CommentSection from "@/app/Component/CommentSection";
// import Head from "next/head";

// interface BlogFrontmatter {
//   Title: string;
//   Description: string;
//   Author: string;
//   Date: string;
// }

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// const processMarkdownContent = async (content: string, title: string) => {
//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeDocument, { title })
//     .use(rehypeFormat)
//     .use(rehypeStringify)
//     .use(rehypePrettyCode, {
//       theme: "github-dark-dimmed",
//       transformers: [
//         transformerCopyButton({
//           visibility: "always",
//           feedbackDuration: 3000,
//         }),
//       ],
//     });

//   const htmlContent = (await processor.process(content)).toString();
//   return htmlContent;
// };

// async function getBlogData(slug: string) {
//   const filePath = path.join(process.cwd(), "content", `${slug}.md`);

//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File ${slug}.md not found!`);
//   }

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(
//     fileContent
//   ) as matter.GrayMatterFile<string>;
//   const blog: BlogFrontmatter = data as BlogFrontmatter;

//   const htmlContent = await processMarkdownContent(content, blog.Title);

//   return { blog, htmlContent };
// }

// export async function generateStaticParams() {
//   const dirPath = path.join(process.cwd(), "content");
//   const filenames = fs.readdirSync(dirPath);

//   return filenames.map((filename) => ({
//     slug: filename.replace(/\.md$/, ""),
//   }));
// }

// export default async function Page({ params }: PageProps) {
//   const { blog, htmlContent } = await getBlogData(params.slug);

//   return (
//     <>
//       <Head>
//         <title>{blog.Title}</title>
//       </Head>
//       <div className="max-w-6xl mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
//         <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//           &quot;{blog.Description}&quot;
//         </p>
//         <div className="flex gap-2">
//           <p className="text-sm text-gray-500 mb-4 italic">By {blog.Author}</p>
//           <p className="text-sm text-gray-500 mb-4">{blog.Date}</p>
//         </div>
//         <div
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//           className="prose dark:prose-invert"
//         />
//         <CommentSection />
//       </div>
//     </>
//   );
// }

// import React from "react";
// import matter from "gray-matter";
// import rehypeDocument from "rehype-document";
// import rehypeFormat from "rehype-format";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";
// import fs from "fs";
// import path from "path";
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
// import CommentSection from "@/app/Component/CommentSection";
// import Head from "next/head";

// interface BlogFrontmatter {
//   Title: string;
//   Description: string;
//   Author: string;
//   Date: string;
// }

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Markdown content ko process karne ke liye function
// const processMarkdownContent = async (content: string, title: string) => {
//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeDocument, { title })
//     .use(rehypeFormat)
//     .use(rehypeStringify)
//     .use(rehypePrettyCode, {
//       theme: "github-dark-dimmed",
//       transformers: [
//         transformerCopyButton({
//           visibility: "always",
//           feedbackDuration: 3000,
//         }),
//       ],
//     });

//   const htmlContent = (await processor.process(content)).toString();
//   return htmlContent;
// };

// // Blog data ko fetch karne ke liye function
// async function getBlogData(slug: string) {
//   const filePath = path.join(process.cwd(), "content", `${slug}.md`);

//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File ${slug}.md not found!`);
//   }

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(
//     fileContent
//   ) as matter.GrayMatterFile<string>;
//   const blog: BlogFrontmatter = data as BlogFrontmatter;

//   const htmlContent = await processMarkdownContent(content, blog.Title);

//   return { blog, htmlContent };
// }

// // Static paths generate karne ke liye function
// export async function generateStaticParams() {
//   const dirPath = path.join(process.cwd(), "content");
//   const filenames = fs.readdirSync(dirPath);

//   return filenames.map((filename) => ({
//     slug: filename.replace(/\.md$/, ""),
//   }));
// }

// // Main Page component
// export default async function Page({ params }: PageProps) {
//   // Params se slug ko fetch kar rahe hain
//   const { blog, htmlContent } = await getBlogData(params.slug);

//   return (
//     <>
//       <Head>
//         <title>{blog.Title}</title>
//       </Head>
//       <div className="max-w-6xl mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
//         <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//           &quot;{blog.Description}&quot;
//         </p>
//         <div className="flex gap-2">
//           <p className="text-sm text-gray-500 mb-4 italic">By {blog.Author}</p>
//           <p className="text-sm text-gray-500 mb-4">{blog.Date}</p>
//         </div>
//         <div
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//           className="prose dark:prose-invert"
//         />
//         <CommentSection />
//       </div>
//     </>
//   );
// }

// import React from "react";
// import matter from "gray-matter";
// import rehypeDocument from "rehype-document";
// import rehypeFormat from "rehype-format";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";
// import fs from "fs";
// import path from "path";
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
// import CommentSection from "@/app/Component/CommentSection";
// import Head from "next/head";

// // Frontmatter type for the blog
// interface BlogFrontmatter {
//   Title: string;
//   Description: string;
//   Author: string;
//   Date: string;
// }

// // Type for the PageProps
// export interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// // Function to process markdown content into HTML
// const processMarkdownContent = async (content: string, title: string) => {
//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeDocument, { title })
//     .use(rehypeFormat)
//     .use(rehypeStringify)
//     .use(rehypePrettyCode, {
//       theme: "github-dark-dimmed",
//       transformers: [
//         transformerCopyButton({
//           visibility: "always",
//           feedbackDuration: 3000,
//         }),
//       ],
//     });

//   const htmlContent = (await processor.process(content)).toString();
//   return htmlContent;
// };

// // Function to fetch blog data based on the slug
// async function getBlogData(slug: string) {
//   const filePath = path.join(process.cwd(), "content", `${slug}.md`);

//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File ${slug}.md not found!`);
//   }

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(
//     fileContent
//   ) as matter.GrayMatterFile<string>;
//   const blog: BlogFrontmatter = data as BlogFrontmatter;

//   // Process the markdown content into HTML
//   const htmlContent = await processMarkdownContent(content, blog.Title);

//   return { blog, htmlContent };
// }

// // Function to generate static params
// export async function generateStaticParams() {
//   const dirPath = path.join(process.cwd(), "content");
//   const filenames = fs.readdirSync(dirPath);

//   return filenames.map((filename) => ({
//     slug: filename.replace(/\.md$/, ""), // Remove the .md extension
//   }));
// }

// // Main Page component for dynamic routes
// const Page = async ({ params }: PageProps) => {
//   // Extract the slug from params
//   const { slug } = params;

//   // Fetch the blog data using the slug
//   const { blog, htmlContent } = await getBlogData(slug);

//   return (
//     <>
//       <Head>
//         <title>{blog.Title}</title>
//       </Head>
//       <div className="max-w-6xl mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
//         <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//           &quot;{blog.Description}&quot;
//         </p>
//         <div className="flex gap-2">
//           <p className="text-sm text-gray-500 mb-4 italic">By {blog.Author}</p>
//           <p className="text-sm text-gray-500 mb-4">{blog.Date}</p>
//         </div>
//         <div
//           dangerouslySetInnerHTML={{ __html: htmlContent }}
//           className="prose dark:prose-invert"
//         />
//         <CommentSection />
//       </div>
//     </>
//   );
// };

// export default Page;

// import React from "react";
// import matter from "gray-matter";
// import rehypeDocument from "rehype-document";
// import rehypeFormat from "rehype-format";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";
// import fs from "fs";
// import path from "path";
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
// import CommentSection from "@/app/Component/CommentSection";
// import Head from "next/head";
// import { checkFields } from "@/lib/typeValidation"
// import { Diff, FirstArg } from "@eslint/eslintrc"
// // Define the BlogFrontmatter type
// interface BlogFrontmatter {
//   Title: string;
//   Description: string;
//   Author: string;
//   Date: string;
// }

// // Define the PageProps type
// export interface PageProps {
//   params: {
//     slug: string;
//   };
//   blog?: BlogFrontmatter;
//   htmlContent: string;
// }

// // Function to process markdown content into HTML
// const processMarkdownContent = async (content: string, title: string) => {
//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeDocument, { title })
//     .use(rehypeFormat)
//     .use(rehypeStringify)
//     .use(rehypePrettyCode, {
//       theme: "github-dark-dimmed",
//       transformers: [
//         transformerCopyButton({
//           visibility: "always",
//           feedbackDuration: 3000,
//         }),
//       ],
//     });

//   const htmlContent = (await processor.process(content)).toString();
//   return htmlContent;
// };

// // Function to fetch blog data based on the slug
// async function getBlogData(slug: string) {
//   const filePath = path.join(process.cwd(), "content", `${slug}.md`);

//   if (!fs.existsSync(filePath)) {
//     throw new Error(`File ${slug}.md not found!`);
//   }

//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(
//     fileContent
//   ) as matter.GrayMatterFile<string>;
//   const blog: BlogFrontmatter = data as BlogFrontmatter;

//   // Process the markdown content into HTML
//   const htmlContent = await processMarkdownContent(content, blog.Title);

//   return { blog, htmlContent };
// }

// // Function to generate static params for dynamic routes
// export async function generateStaticParams() {
//   const dirPath = path.join(process.cwd(), "content");
//   const filenames = fs.readdirSync(dirPath);

//   return filenames.map((filename) => ({
//     slug: filename.replace(/\.md$/, ""), // Remove the .md extension
//   }));
// }

// // Main Page component for dynamic routes
// const Page = async ({ params }: PageProps) => {
//   // Check the prop type of the entry function
//   checkFields<Diff<PageProps, FirstArg<typeof Page>, "default">>();

//   const { slug } = params;

//   try {
//     // Fetch the blog data using the slug
//     const { blog, htmlContent } = await getBlogData(slug);

//     return (
//       <>
//         <Head>
//           <title>{blog.Title}</title>
//         </Head>
//         <div className="max-w-6xl mx-auto p-4">
//           <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
//           <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//             &quot;{blog.Description}&quot;
//           </p>
//           <div className="flex gap-2">
//             <p className="text-sm text-gray-500 mb-4 italic">
//               By {blog.Author}
//             </p>
//             <p className="text-sm text-gray-500 mb-4">{blog.Date}</p>
//           </div>
//           <div
//             dangerouslySetInnerHTML={{ __html: htmlContent }}
//             className="prose dark:prose-invert"
//           />
//           <CommentSection />
//         </div>
//       </>
//     );
//   } catch {
//     return (
//       <div className="max-w-6xl mx-auto p-4 text-center">
//         <h1 className="text-4xl font-bold mb-4">404 - Blog Not Found</h1>
//         <p className="text-lg">The requested blog post could not be found.</p>
//       </div>
//     );
//   }
// };

// export default Page;



import React from "react";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import fs from "fs";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import CommentSection from "@/app/Component/CommentSection";
import Head from "next/head";

// Define the BlogFrontmatter type
interface BlogFrontmatter {
  Title: string;
  Description: string;
  Author: string;
  Date: string;
}

// Define the PageProps type
export interface PageProps {
  params: {
    slug: string;
  };
  blog?: BlogFrontmatter;
  htmlContent: string;
}

// Function to process markdown content into HTML
const processMarkdownContent = async (content: string, title: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark-dimmed",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();
  return htmlContent;
};

// Function to fetch blog data based on the slug
async function getBlogData(slug: string) {
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${slug}.md not found!`);
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(
    fileContent
  ) as matter.GrayMatterFile<string>;
  const blog: BlogFrontmatter = data as BlogFrontmatter;

  // Process the markdown content into HTML
  const htmlContent = await processMarkdownContent(content, blog.Title);

  return { blog, htmlContent };
}

// Function to generate static params for dynamic routes
export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(dirPath);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""), // Remove the .md extension
  }));
}

// Main Page component for dynamic routes
const Page = async ({ params }: PageProps) => {
  const { slug } = params;

  try {
    // Fetch the blog data using the slug
    const { blog, htmlContent } = await getBlogData(slug);

    return (
      <>
        <Head>
          <title>{blog.Title}</title>
        </Head>
        <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
          <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
            &quot;{blog.Description}&quot;
          </p>
          <div className="flex gap-2">
            <p className="text-sm text-gray-500 mb-4 italic">
              By {blog.Author}
            </p>
            <p className="text-sm text-gray-500 mb-4">{blog.Date}</p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert"
          />
          <CommentSection />
        </div>
      </>
    );
  } catch {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Blog Not Found</h1>
        <p className="text-lg">The requested blog post could not be found.</p>
      </div>
    );
  }
};

export default Page;
