import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}
const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <main className="root">
      <Sidebar/>
      <MobileNav/>
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  );
};
export default LayoutPage;
