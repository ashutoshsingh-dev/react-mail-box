import { useMediaQuery } from "@/hooks/use-media-query";
import DesktopMail from "../components/layouts/desktop-mail";
import MobileMail from "../components/layouts/mobile-mail";

const MailApp = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return <>{isDesktop ? <DesktopMail /> : <MobileMail />}</>;
};

export default MailApp;
