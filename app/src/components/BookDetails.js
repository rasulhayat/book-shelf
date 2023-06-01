import React from "react";
import { Paper, Typography, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  cover: {
    float: "left",
    marginRight: theme.spacing(3),
    width: 150,
  },
}));

const BookDetails = ({ book }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <img src={book.cover} alt={book.title} className={classes.cover} />
      <Typography variant="h5" component="h3">
        {book.title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        by {book.author}
      </Typography>
      <Typography variant="body1" component="p">
        {book.description}
      </Typography>
    </Paper>
  );
};

export default BookDetails;
