import { UserButton } from "@clerk/nextjs";
import MobileSidebarMenu from "@/components/ui/MobileSidebarMenu";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebarMenu />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
