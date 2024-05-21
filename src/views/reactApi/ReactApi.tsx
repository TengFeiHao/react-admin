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
  return (
    <>
      <div onClick={onImmer}>immer 不可变数据</div>
      <div onClick={onReducer}>reducer useImmerReducer</div>
      <div onClick={onState}>state响应输入</div>
      <Outlet />
    </>
  );
}
