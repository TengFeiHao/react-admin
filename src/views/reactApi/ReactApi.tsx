import { Outlet, useNavigate } from "react-router";

export default function ReactApi() {
  const navigation = useNavigate()
  const onImmer = () => {
    navigation('/reactApi/immer')
  }
  return (
    <>
      <div onClick={onImmer}>immer</div>
      <Outlet />
    </>
  );
}
