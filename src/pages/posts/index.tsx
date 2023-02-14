import { useState, useEffect } from "react";
import { Button, SelectChangeEvent } from "@mui/material";
import { Row } from "../../comon/styles";
import PostCard from "../../components/card";
import { Container } from "./styles";
import {
  useGetCommentsQuery,
  useGetPostsQuery,
  useGetUsersQuery,
} from "../../store/slices/apiSlice";
import SelectAutoWidth from "../../components/select";
import { getCommentCount, getUserMenuList } from "../../utils/helpers";

const countsList = [
  { id: 2, name: "2" },
  { id: 5, name: "5" },
  { id: 10, name: "10" },
];

const PostPage = () => {
  const {
    data: users,
    isLoading: isUsersLoading,
    error: usersError,
  } = useGetUsersQuery();
  const {
    data: posts,
    isLoading: isPostsLoading,
    error: postsError,
  } = useGetPostsQuery();
  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError,
  } = useGetCommentsQuery();

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [postCount, setPostCount] = useState(0);

  const displayPosts = posts
    ?.filter((item) => (item.userId === Number(name) || name === ""))
    ?.slice(0, postCount);

  useEffect(() => {
    if (posts && !count) {
      setPostCount(posts.length);
    } else if (posts && count) {
      setPostCount(Number(count));
    }
  }, [posts, count]);

  const handleNameChange = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };

  const handleCountChange = (event: SelectChangeEvent) => {
    setCount(event.target.value);
  };

  const handleShowMore = () => {
    if (count) setPostCount(postCount + Number(count));
  };

  if (isUsersLoading || isPostsLoading || isCommentsLoading) {
    return <div>Loading...</div>;
  }

  if (usersError || postsError || commentsError) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Row>
        <SelectAutoWidth
          label="Author"
          items={getUserMenuList(users)}
          value={name}
          handleChange={handleNameChange}
        />
        <SelectAutoWidth
          label="Count"
          items={countsList}
          value={count}
          handleChange={handleCountChange}
        />
      </Row>
      {displayPosts &&
        displayPosts.map((item, index) => (
          <PostCard
            title={item.title}
            body={item.body}
            commentCount={getCommentCount(comments, item.id)}
            key={index}
          />
        ))}
      <Button variant="outlined" onClick={handleShowMore}>
        Show More
      </Button>
    </Container>
  );
};

export default PostPage;
