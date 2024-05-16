import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/style/normalize.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  /**
   * StrictMode 严格模式在生产环境下不生效，因此它不会降低应用程序的速度
   * React 提供了 “严格模式”，在严格模式下开发时，它将会调用每个组件函数两次。通过重复调用组件函数，严格模式有助于找到违反这些规则的组件。
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
