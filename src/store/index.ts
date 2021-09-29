import { createStore } from "redux";

import rootReducer from './reducer'

// 原生的 redux 结合 ts 其中的 reducer action 类型需要自己添加
const store = createStore(rootReducer)


export default store

export type RootState = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch
