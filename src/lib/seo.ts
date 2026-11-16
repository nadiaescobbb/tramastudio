const SITE_URL = "https://www.heytrama.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-heytrama.jpg`;

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  ogDescription?: string;
};

const setMeta = (
  selector: string,
  attribute: "content" | "href",
  value: string,
) => {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
};

export const setSeo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  ogDescription,
}: SeoInput) => {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

  document.title = title;

  setMeta('meta[name="description"]', "content", description);
  setMeta('link[rel="canonical"]', "href", url);

  setMeta('meta[property="og:title"]', "content", title);
  setMeta(
    'meta[property="og:description"]',
    "content",
    ogDescription || description,
  );
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:type"]', "content", "website");
  setMeta('meta[property="og:site_name"]', "content", "HeyTrama");
  setMeta('meta[property="og:image"]', "content", image);
};