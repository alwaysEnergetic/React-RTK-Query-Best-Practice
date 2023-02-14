import { SelectChangeEvent } from "@mui/material";

export type SelectItemProps = {
  id: number;
  name: string;
};

export type SelectProps = {
  label: string;
  items: Array<SelectItemProps>;
  value: string;
  handleChange: (event: SelectChangeEvent) => void;
};

export type User = {
  id: number;
  name: string;
  username: string;
};

export type Post = {
  userId?: number;
  id?: number;
  title: string;
  body: string;
};

export interface PostComponentProps extends Post {
  commentCount: number;
}

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
