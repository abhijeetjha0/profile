import './styles/app.scss';
import { Outlet } from 'react-router'
import NavigationBar from './components/NavigationBar';

function Layout() {
    return (
        <>
            <NavigationBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
