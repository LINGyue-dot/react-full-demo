import { ADD } from "../actionTypes";

interface StateProp {
  count: number
}

const initState: StateProp = {
  count: 0
}

// reducer 根据不同的 action 对状态做不同的修改
export default function (state = initState, action: any) {
  switch (action.type) {
    case ADD: {
      return {
        count: state.count + 1
      }
    }
    default:
      return state
  }
}

