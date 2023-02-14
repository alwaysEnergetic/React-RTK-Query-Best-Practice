import * as React from "react";
import Badge from "@mui/material/Badge";
import MessageIcon from '@mui/icons-material/Message';

export default function CommentBadge({
    count=0
}) {
  return (
    <Badge badgeContent={count} color="primary">
      <MessageIcon color="action" />
    </Badge>
  );
}
