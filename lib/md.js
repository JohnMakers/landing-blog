// Tiny markdown helpers: excerpt + minimal HTML renderer
// No external deps.

function escapeHtml(s = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Inline formatting inside a single line
function renderInline(text = "") {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")                 // **bold**
    .replace(/\*(.+?)\*/g, "<em>$1</em>")                             // *italic*
    .replace(/`(.+?)`/g, "<code>$1</code>")                           // `code`
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

// Public: convert markdown string to HTML (headings, lists, paragraphs)
export function mdToHtml(md = "") {
  const lines = md.replace(/\r\n?/g, "\n").split("\n");
  let html = "";
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) { html += "</ul>"; inUl = false; }
    if (inOl) { html += "</ol>"; inOl = false; }
  };

  for (let raw of lines) {
    const line = raw.trim();

    // Blank line -> close lists; skip
    if (!line) { closeLists(); continue; }

    // Headings: # .. ######
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      closeLists();
      const level = Math.min(h[1].length, 3); // keep h1–h3
      html += `<h${level}>${renderInline(h[2])}</h${level}>`;
      continue;
    }

    // Unordered list: -, *
    let m = line.match(/^[-*]\s+(.*)$/);
    if (m) {
      if (inOl) { html += "</ol>"; inOl = false; }
      if (!inUl) { html += "<ul>"; inUl = true; }
      html += `<li>${renderInline(m[1])}</li>`;
      continue;
    }

    // Ordered list: "1) item" or "1. item"
    m = line.match(/^\d+[\)\.]\s+(.*)$/);
    if (m) {
      if (inUl) { html += "</ul>"; inUl = false; }
      if (!inOl) { html += "<ol>"; inOl = true; }
      html += `<li>${renderInline(m[1])}</li>`;
      continue;
    }

    // Paragraph
    closeLists();
    html += `<p>${renderInline(line)}</p>`;
  }

  closeLists();
  return html;
}

// Public: plain-text excerpt (remove markdown + author line)
export function excerptFromMarkdown(md = "", maxLen = 160) {
  // Drop any author line like "**By Wonderful...**"
  const noAuthor = md
    .split("\n")
    .filter((l) => !/^\s*\*\*by\s/i.test(l.trim()))
    .join("\n");

  // Strip links -> keep link text
  let text = noAuthor.replace(/\[(.+?)\]\((.*?)\)/g, "$1");

  // Remove markdown markers (#, *, -, >, `, etc.)
  text = text
    .replace(/`[^`]+`/g, " ")
    .replace(/[*_~`>#]/g, " ")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+[\)\.]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length > maxLen) return text.slice(0, maxLen - 1) + "…";
  return text;
}

// Export a shared slugify so list and page agree
export function slugify(s = "") {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
