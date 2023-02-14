import { User, Comment } from "./types";

export const getUserMenuList = (users: User[] | undefined) => {
  if (users) {
    const userList = users.map((item) => {
      return { id: item.id, name: item.name };
    });

    return userList;
  } else {
    return [];
  }
};

export const getCommentCount = (
  comments: Comment[] | undefined,
  postId: number | undefined
) => {
  if (comments) {
    const postComment = comments.filter((comment) => comment.postId === postId);
    return postComment.length;
  } else {
    return 0;
  }
};
