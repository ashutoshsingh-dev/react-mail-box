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
  Users2,
} from "lucide-react";
import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AccountSwitcher } from "../account-switcher";
import { MailList } from "../mail-list";
import { Nav } from "../nav";
import { accounts, mails } from "../../../../constants/mail-data";
import { Outlet, useParams } from "react-router";
import PleaseSelectMessage from "./please-select-message";

const DesktopMail = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { mailId } = useParams();

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`;
        }}
        className="max-h-dvh"
      >
        <ResizablePanel
          defaultSize={20}
          collapsedSize={4}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={() => {
            setIsCollapsed(true);

            // we will presist this in future
            // document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            //   true
            // )}`;
          }}
          onResize={() => {
            setIsCollapsed(false);

            // we will presist this in future
            // document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            //   false
            // )}`;
          }}
          className={cn(
            "lg:block hidden",
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <div
            className={cn(
              "flex h-[52px] items-center justify-center shadow",
              isCollapsed ? "h-[52px]" : "px-2"
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <div className="h-[calc(100vh-52px)] overflow-scroll">
            <Nav
              isCollapsed={isCollapsed}
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
              isCollapsed={isCollapsed}
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
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={32} minSize={30}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2 shadow h-[52px]">
              <h1 className="text-xl font-bold">Inbox</h1>
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
        </ResizablePanel>
        <ResizableHandle className="w-[0.8px] lg:flex hidden" withHandle />

        <ResizablePanel
          defaultSize={48}
          minSize={30}
          className="lg:block hidden"
        >
          {mailId ? (
            <Outlet />
          ) : (
            <>
              <PleaseSelectMessage />
            </>
          )}
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};

export default DesktopMail;
