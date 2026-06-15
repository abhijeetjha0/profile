import ErrorBoundary from "../components/ErrorBoundary";
import Home from "../components/Home";
import Loader from "../components/Loader";
import Layout from "../Layout";

const routes = [{
    Component: Layout,
    ErrorBoundary,
    loader: async () => {
        // TODO: Add some API call here
        return {};
    },
    path: '/profile',
    children: [
        {
            index: true,
            Component: Home
        }
    ],
    HydrateFallback: Loader
}];

export default routes;