import DarkMode from "../dark-mode";
import { HeaderCommandSearch } from "../header/header-command-search";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  return (
    <header className="flex py-3 w-full h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-10"
          />
          <HeaderCommandSearch />
        </div>
        <div className="flex items-center gap-3">
          <DarkMode />
        </div>
      </div>
    </header>
  );
}
