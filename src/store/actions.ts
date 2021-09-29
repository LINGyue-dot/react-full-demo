// action 用来生成需要进行做什么类型处理
// {type:...,payload:...}

import { ADD } from "./actionTypes";

// 不同类型的任务
export const addCount = (content: number) => ({
  type: ADD,
  payload: {
    count: content
  }
})