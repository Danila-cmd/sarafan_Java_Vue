import Vue from 'vue'
import Vuetify from 'vuetify'
import '@babel/polyfill'
import 'api/resource'
import router from 'router/router'
import App from "./pages/App.vue";
import store from 'store/store'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'
import * as Sentry from '@sentry/browser'
import {Integrations} from "@sentry/tracing"
import profile from "./api/profile";

Sentry.init({
    Vue,
    dsn: "https://229945a06d384cf283b0a35ac3cade03@o491121.ingest.sentry.io/5556116",
    autoSessionTracking: true,
    integrations: [
        new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

Sentry.configureScope(scope =>
    scope.setUser({
        id: profile && profile.id,
        username:profile && profile.name
    })
)

if (profile) {
    connect()
}

Vue.use(Vuetify)

new Vue({
    el: '#app',
    store,
    router,
    render: a => a(App)
})