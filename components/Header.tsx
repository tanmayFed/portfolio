"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About me",
    url: "/about",
    icon: Inbox,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: Calendar,
  },
];

export default function Header() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center p-6">
        <div className="border-lime-700 border-4 rounded-full h-19 w-20 flex items-center justify-center">
          <Image src="/icon.png" alt="Logo" width={100} height={100} />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-6 pt-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-base">
                    <a href={item.url} className="p-6 gap-6">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <ThemeToggle />
    </Sidebar>
  );
}
