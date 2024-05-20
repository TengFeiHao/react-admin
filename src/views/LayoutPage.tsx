
import { Outlet, useNavigate } from "react-router"

export default function LayoutPage() {
  const navigate = useNavigate();
  const onImmer = () => {
    navigate('/reactApi')
  }
  return <div>
    <div className="header" onClick={onImmer}>reactApi</div>
    <Outlet />
  </div>
}
