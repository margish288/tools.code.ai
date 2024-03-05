import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
