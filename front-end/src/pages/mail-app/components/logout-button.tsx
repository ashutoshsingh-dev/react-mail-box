import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { removeCredentials } = useAuth();
  return (
    <div className="p-4">
      <Button
        className="mt-auto w-full"
        variant="secondary"
        size="sm"
        onClick={() => removeCredentials()}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
