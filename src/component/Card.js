import React from 'react';
import { useDispatch } from 'react-redux';
import { postSelect, removePost } from '../redux/Action/action';
import {  CardContent, IconButton, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import {Icon} from '@material-ui/core';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePost(post.id));
  };

  const handlePostSelect=(post)=>{
    console.log(post,"post")
    dispatch(postSelect(post))
  }

  return (
    <Card onClick={()=>handlePostSelect(post)}>
      <CardContent>
        <IconButton onClick={handleRemove} style={{ float: 'right' }}>
        <Icon icon="mingcute:close-fill" width="24" height="24"  color='red'/>
        </IconButton>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
