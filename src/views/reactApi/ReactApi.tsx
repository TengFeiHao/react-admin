import { Outlet, useNavigate } from "react-router";

export default function ReactApi() {
  const navigation = useNavigate()
  const onImmer = () => {
    navigation('/reactApi/immer')
  }
  const onReducer = () => {
    navigation('/reactApi/reducer')
  }
  const onState = () => {
    navigation('/reactApi/stateStatus')
  }
  const onRefDemo = () => {
    navigation('/reactApi/refDemo')
  }
  const onLoopRef = () => {
    navigation('/reactApi/loopRef')
  }
  return (
    <>
      <div onClick={onImmer}>immer 不可变数据</div>
      <div onClick={onReducer}>reducer useImmerReducer</div>
      <div onClick={onState}>state响应输入</div>
      <div onClick={onRefDemo}>refDemo</div>
      <div onClick={onLoopRef}>loopRef</div>
      <Outlet />
    </>
  );
}
