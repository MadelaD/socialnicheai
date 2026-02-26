import { Topbar } from "@/components/shared/topbar";
import { Sidebar } from "@/components/shared/sidebar";

const DashboardLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:col-col md:fixed md:inset-y-0 z-[80] bg-gray-900 text-white">
                <Sidebar />
            </div>
            <main className="md:pl-72 focus-visible:outline-none focus:outline-none">
                <Topbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
