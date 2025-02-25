import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Menu,
  Users2,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mails } from "../../../../constants/mail-data";
import { MailList } from "../mail-list";
import { Outlet, useParams } from "react-router";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Nav } from "../nav";
import { Separator } from "@/components/ui/separator";

const MobileMail = () => {
  const { mailId } = useParams();

  return (
    <>
      {mailId ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2 shadow h-[52px]">
              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger>
                    <Menu />
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Menu</SheetTitle>
                      <div className="h-[calc(100vh-52px)] overflow-scroll">
                        <Nav
                          links={[
                            {
                              title: "Inbox",
                              label: "128",
                              icon: Inbox,
                              variant: "default",
                            },
                            {
                              title: "Drafts",
                              label: "9",
                              icon: File,
                              variant: "ghost",
                            },
                            {
                              title: "Sent",
                              label: "",
                              icon: Send,
                              variant: "ghost",
                            },
                            {
                              title: "Junk",
                              label: "23",
                              icon: ArchiveX,
                              variant: "ghost",
                            },
                            {
                              title: "Trash",
                              label: "",
                              icon: Trash2,
                              variant: "ghost",
                            },
                            {
                              title: "Archive",
                              label: "",
                              icon: Archive,
                              variant: "ghost",
                            },
                          ]}
                        />
                        <Separator />
                        <Nav
                          links={[
                            {
                              title: "Social",
                              label: "972",
                              icon: Users2,
                              variant: "ghost",
                            },
                            {
                              title: "Updates",
                              label: "342",
                              icon: AlertCircle,
                              variant: "ghost",
                            },
                            {
                              title: "Forums",
                              label: "128",
                              icon: MessagesSquare,
                              variant: "ghost",
                            },
                            {
                              title: "Shopping",
                              label: "8",
                              icon: ShoppingCart,
                              variant: "ghost",
                            },
                            {
                              title: "Promotions",
                              label: "21",
                              icon: Archive,
                              variant: "ghost",
                            },
                          ]}
                        />
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                <h1 className="text-xl font-bold">Inbox</h1>
              </div>

              <TabsList className="ml-auto">
                <TabsTrigger
                  value="all"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  All mail
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  className="text-zinc-600 dark:text-zinc-200"
                >
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky to-0">
              <form>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <div className="h-[calc(100vh-120px)] overflow-scroll">
              <TabsContent value="all" className="m-0 ">
                <MailList items={mails} />
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <MailList items={mails.filter((item) => !item.read)} />
              </TabsContent>
            </div>
          </Tabs>
        </>
      )}
    </>
  );
};

export default MobileMail;
