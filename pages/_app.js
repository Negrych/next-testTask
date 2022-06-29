import { Provider } from "react-redux";

import store from "../store/storeConfig";

// eslint-disable-next-line react/prop-types
const _app = ({ Component, pageProps }) => {
  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default _app;
