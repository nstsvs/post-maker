import { useState } from 'react';
import styles from './index.module.scss';

export const LikesButton = () => {
  const [ likes, setLikes ] = useState<number>(0);
  const [ isLiked, setIsLiked ] = useState<boolean>(false);

  const handleLikes = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={handleLikes}
        className={styles.button}
      >
        {isLiked ? '💖 Liked' : '🤍 Like'}
      </button>
      <span className={styles.text}>{likes} {likes === 1 ? 'like' : 'likes'}</span>
    </div>
  )
}
