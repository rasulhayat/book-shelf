import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const FriendList = ({ friends }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {friends.map((friend) => (
          <ListItem key={friend.id}>
            <ListItemAvatar>
              <Avatar alt={friend.name} src={friend.avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={friend.name} secondary={friend.email} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FriendList;
