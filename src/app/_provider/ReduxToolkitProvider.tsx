import { Provider } from "react-redux";
import store from '../_store'

export default function ReduxToolkitProvider ({children}: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>
}