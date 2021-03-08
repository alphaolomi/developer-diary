// import authors from "../../meta/authors.yml";

let authors = {
  authors: [
    {
      slug: "alphaolomi",
      name: "Alpha Olomi",
      introduction: "Software Engineer / JS / React",
    },
  ],
};


export type AuthorContent = {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
};

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: AuthorContent } {
  let result: { [key: string]: AuthorContent } = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

export function getAuthor(slug: string) {
  return authorMap[slug];
}
