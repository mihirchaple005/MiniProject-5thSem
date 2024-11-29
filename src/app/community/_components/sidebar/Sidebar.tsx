import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import { getSelf } from "../../../../../lib/auth-service";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = async ({ children }) => {
    
    const currentUser = await getSelf();
    return(
        <div className="h-full">
            <DesktopSidebar currentUser={currentUser!}/>
            <MobileFooter />
            <main className="lg:pl-20 h-full">
                { children }
            </main>
            
        </div> 
    )
}

export default Sidebar;