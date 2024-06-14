import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  loader as rootLoader,
  action as rootAction,
} from "./root";
import Root from "../views/Root"
import ErrorPage from "../views/ErrorPage";
import {
  loader as contactLoader,
  action as contactAction,
} from "./contact";
import Contact from '../views/Contact'
import { action as editAction } from "./edit";
import EditContact from '../views/Edit'
import { action as destroyAction } from "./destroy";
import Index from "../views/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Index />}></Route>
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        ></Route>
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        ></Route>
        <Route
          path="contacts/:contactId/destroy"
          errorElement={<div>Oops! There was an error.</div>}
          action={destroyAction}
        ></Route>
      </Route>
    </Route>
  )
);

export default router