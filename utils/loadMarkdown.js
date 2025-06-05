import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

function importAll(r) {
  return r.keys().map((key) => {
    const file = r(key);
    const rawContent = file.default;
    const { data, content } = matter(rawContent);
    return {
      ...data,
      content: md.render(content),
      slug: key.replace("./", "").replace(".md", ""),
    };
  });
}

// .md を文字列として取得
const posts = importAll(require.context("../content", false, /\.md$/));

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
