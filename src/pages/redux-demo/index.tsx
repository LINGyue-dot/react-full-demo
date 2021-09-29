import React from 'react';
import { addCount } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { getCount } from '../../store/selector';

const ReduxDemo = () => {
  const count = useAppSelector(getCount);

  const dispatch = useAppDispatch();

  const hanleAdd = () => {
    dispatch(addCount(1));
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={hanleAdd}>加一</button>
    </div>
  );
};

export default ReduxDemo;
