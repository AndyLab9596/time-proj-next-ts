import classes from './comment-list.module.css';

interface ICommentListProps {
  items: { [x: string]: string }[]
}

const CommentList: React.FC<ICommentListProps> = (props) => {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;