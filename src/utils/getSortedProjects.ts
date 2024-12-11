import type { CollectionEntry } from "astro:content";
import projectFilter from "./projectFilter";

const getSortedProjects = (posts: CollectionEntry<"projects">[]) => {
  return posts
    .filter(projectFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedProjects;
