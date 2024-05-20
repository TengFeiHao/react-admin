export const getFinalState = (baseState: any, queue: any[]) => {
  let finalState = baseState;
  for (const update of queue) {
    if (typeof update === 'function') {
      // 调用更新函数
      finalState = update(finalState);
    } else {
      // 替换下一个 state
      finalState = update;
    }
  }
  return finalState;
}