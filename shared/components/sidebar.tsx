/* eslint-disable @next/next/no-img-element */
import { AddressBook, Calendar, Gear, Logo, VideoCamera } from "./icons";

const Sidebar = () => {
  const links = [
    { href: "/calendar", label: "Calendar", icon: Calendar },
    { href: "/meeting", label: "Meeting", icon: VideoCamera },
    { href: "/report", label: "Report", icon: AddressBook },
    { href: "/settings", label: "Settings", icon: Gear },
  ];

  const Links = (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <button
          type="button"
          className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md hover:opacity-75 transition-all"
          key={link.href}
        >
          {link.icon()}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="flex flex-col justify-between p-4 border-r-2 border-gray-100">
      <Logo />

      {Links}

      <img
        className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
    </nav>
  );
};

export default Sidebar;
