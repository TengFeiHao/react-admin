import { useRoutes } from 'react-router'
import { lazy, Suspense } from 'react'

const LayoutPage = lazy(() => import('@/views/LayoutPage'))
const ReactApi = lazy(() => import('@/views/reactApi/ReactApi'))
const UseImmerPage = lazy(() => import('@/views/reactApi/immer/UseImmerPage'))

const RoterConfig = () => {
  return useRoutes([
    {
      path: '/',
      element: <Suspense><LayoutPage/></Suspense>,
      children: [
        {
          path: '/reactApi',
          element: <Suspense><ReactApi/></Suspense>,
          children: [
            {
              path: 'immer',
              element: <Suspense><UseImmerPage/></Suspense>
            }
          ]
        }
      ]
    }
  ])
}
export default RoterConfig