import {NgModule} from "@angular/core";
// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import {DevToolsExtension, NgRedux, NgReduxModule} from "@angular-redux/store";
import {provideReduxForms} from "@angular-redux/form";
// Redux ecosystem stuff.
import createLogger from "redux-logger";
// The top-level reducers and epics that make up our app's logic.
import {IAppState} from "./root.types";
import {rootReducer} from "./root.reducer";
import {RootEpics} from "./root.epics";

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    // Enable syncing of Angular router state with our Redux store.
    // ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
