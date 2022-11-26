import React, { useEffect, useState } from 'react';
import CommentList from './comment-list';
import classes from './comments.module.css';
import NewComment from './new-comment';

interface ICommentsProps {
  eventId: string;
}

const Comments: React.FC<ICommentsProps> = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setCommnents] = useState<{[x: string]: string}[]>([]);

  useEffect(() => {
    if (showComments) {
      fetch('/api/comments/' + eventId)
      .then((response) => response.json())
      .then((data) => setCommnents(data.comments))
    }
  },[showComments, eventId])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: any) {
    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    }).then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments