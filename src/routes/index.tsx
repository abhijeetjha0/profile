import ErrorBoundary from "../components/ErrorBoundary";
import Home from "../components/Home";
import Loader from "../components/Loader";
import Layout from "../Layout";

const routes = [{
    loader: async () => {
        // TODO: Add some API call here
        return {};
    },
    Component: Layout,
    ErrorBoundary,
    children: [
        {
            index: true,
            Component: Home
        }
    ],
    HydrateFallback: Loader
}];

export default routes;