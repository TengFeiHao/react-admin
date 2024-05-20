import { Outlet, useNavigate } from "react-router";

export default function ReactApi() {
  const navigation = useNavigate()
  const onImmer = () => {
    navigation('/reactApi/immer')
  }
  const onReducer = () => {
    navigation('/reactApi/reducer')
  }
  return (
    <>
      <div onClick={onImmer}>immer</div>
      <div onClick={onReducer}>reducer</div>
      <Outlet />
    </>
  );
}
