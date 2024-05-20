import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const LayoutPage = lazy(() => import('@/views/LayoutPage'))
const ReactApi = lazy(() => import('@/views/reactApi/ReactApi'))
const UseImmer = lazy(() => import('@/views/reactApi/immer/UseImmer'))

const GetRouters = () => {
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
              element: <Suspense><UseImmer/></Suspense>
            }
          ]
        }
      ]
    }
  ])
}
export default GetRouters