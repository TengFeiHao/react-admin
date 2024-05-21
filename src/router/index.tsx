import { useRoutes } from 'react-router'
import { lazy, Suspense } from 'react'

const LayoutPage = lazy(() => import('@/views/LayoutPage'))
const ReactApi = lazy(() => import('@/views/reactApi/ReactApi'))
const UseImmerPage = lazy(() => import('@/views/reactApi/immer/UseImmerPage'))
const ReducerPage = lazy(() => import('@/views/reactApi/reducer/ReducerPage'))
const StateStatus = lazy(() => import('@/views/reactApi/state/StateStatus'))

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
            },
            {
              path: 'reducer',
              element: <Suspense><ReducerPage/></Suspense>
            },
            {
              path: 'stateStatus',
              element: <Suspense><StateStatus/></Suspense>
            }
          ]
        }
      ]
    }
  ])
}
export default RoterConfig