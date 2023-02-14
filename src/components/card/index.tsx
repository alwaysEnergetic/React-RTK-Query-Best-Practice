import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PostComponentProps } from "../../utils/types";
import CommentBadge from "../badge";

export default function PostCard({
  title,
  body,
  commentCount,
}: PostComponentProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
      <CardActions>
        <CommentBadge count={commentCount} />
      </CardActions>
    </Card>
  );
}
