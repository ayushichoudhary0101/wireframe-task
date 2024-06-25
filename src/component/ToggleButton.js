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
    <button onClick={() => handleToggle('list')} className={viewMode === 'list' ? 'active' : ''}>List</button>
    <button onClick={() => handleToggle('grid')} className={viewMode === 'grid' ? 'active' : ''}>Grid</button>
  </div>
  );
};

export default ToggleButton;
