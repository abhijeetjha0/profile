import './styles/app.scss';
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Layout
