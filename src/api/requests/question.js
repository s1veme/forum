import { posts } from "../../../assets/posts";

export default {
  get(from, page) {
    return posts.slice(from, page);
  },
};
