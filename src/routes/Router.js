import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { authLayoutRoutes, commonLayoutRoutes } from ".";

import CommonLayout from "../layouts/CommonLayout";
import AuthLayout from "../layouts/AuthLayout";

const initRoutes = (Layout, routes) => {

  return (
    routes.map((route, index) => { 
      const { component: Component, children, path} = route;
      return children ? (
        [route, ...children].map((element, index) => {
          const isParent = Boolean(element.children);
          const fullPath = (isParent ? "" : path) + element.path;
          return (
            element.component &&
            <Route
              key={index}
              path={fullPath}
              exact
              render={(props) => (
                <Layout>
                  <element.component {...props} />
                </Layout> 
              )}
            />
          );
        })
      ) : Component ? (
        <Route
          key={index}
          path={path}
          exact
          render={(props) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ) : null;
    })
  )
}
const Routes = () => (
  <Router>

    <Switch>
      {initRoutes(CommonLayout, commonLayoutRoutes)}
      {initRoutes(AuthLayout, authLayoutRoutes)}
      <Route
        render={() => (
          <div>
            404
          </div>
        )}
        />
    </Switch>

  </Router>
);

export default Routes;
