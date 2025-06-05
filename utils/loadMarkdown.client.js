// utils/loadMarkdown.client.js
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

// Webpack環境でのみ動作（クライアントサイド用）
const files = require.context("../content", false, /\.md$/);

const posts = files.keys().map((key) => {
  const rawContent = files(key).default;
  const { data, content } = matter(rawContent);
  return {
    ...data,
    content: md.render(content),
    slug: key.replace("./", "").replace(".md", ""),
  };
});

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
