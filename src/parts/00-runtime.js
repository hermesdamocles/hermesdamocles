(function () {
  "use strict";

  const SDK = window.__HERMES_PLUGIN_SDK__;
  const React = SDK.React;
  const {
    useState,
    useEffect,
    useMemo,
    useRef
  } = React;
  const API = "/api/plugins/hermes-damocles";
  const uiUseState = React.useState;
