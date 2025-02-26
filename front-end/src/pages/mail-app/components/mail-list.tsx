import { ComponentProps } from "react";
import { formatDistanceToNow } from "date-fns";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Mail } from "../../../constants/mail-data";
import { useParams } from "react-router";
// import { useNavigate, useParams } from "react-router";

interface MailListProps {
  items: Mail[];
  onFilterMails: (filter: string) => void;
}

export function MailList({ items, onFilterMails }: MailListProps) {
  const { mailId } = useParams();

  // const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 p-2 pt-0">
      {items.map((item) => (
        <div key={item.id}>
          <div
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mailId === item.id && "bg-muted"
            )}
            // onClick={() => {
            //   navigate(`/${item.id}`);
            // }}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mailId === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}

                <Badge
                  onClick={() => onFilterMails(item.id)}
                  className="cursor-pointer"
                >
                  delete X
                </Badge>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
