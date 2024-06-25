import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setViewMode } from '../redux/Action/action';
import { Button } from '@material-ui/core';

const ToggleButton = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector(state => state.viewMode);
    console.log(viewMode,'viewMode')
    const handleToggle = (mode) => {
        dispatch(setViewMode(mode));
      };
    
  return (
    <div className="view-toggle">
    <Button onClick={() => handleToggle('list')} className={viewMode === 'list' ? 'active' : ''}>view</Button>
    <Button onClick={() => handleToggle('grid')} className={viewMode === 'grid' ? 'active' : ''}>Grid</Button>
  </div>
  );
};

export default ToggleButton;
