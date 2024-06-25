import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from './Card';

const CardList = () => {
  const posts = useSelector(state => state.posts);
  console.log(posts,"posts")
  const viewMode = useSelector(state => state.viewMode);
console.log(viewMode,"viewMode")
  const cardItems = posts.slice(0, 6).map(post => <PostCard key={post.id} post={post} />);

  return (
    <div className={viewMode === 'grid' ? 'grid-view' : 'list-view'}>
      {cardItems}
    </div>
  );
};

export default CardList;
