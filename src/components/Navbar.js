"use client";

import { MenuIcon, Moon, Settings, Settings2, Settings2Icon, SettingsIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitch from "./ThemeSwitch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


const Navbar = () => {
    const features = [
        {
            title: "Dashboard",
            description: "Overview of your activity",
            href: "#",
        },
        {
            title: "Analytics",
            description: "Track your performance",
            href: "#",
        },
        {
            title: "Settings",
            description: "Configure your preferences",
            href: "#",
        },
        {
            title: "Integrations",
            description: "Connect with other tools",
            href: "#",
        },
        {
            title: "Storage",
            description: "Manage your files",
            href: "#",
        },
        {
            title: "Support",
            description: "Get help when needed",
            href: "#",
        },
    ];

    return (
        <section className="py-2   bg-white shadow-sm dark:bg-slate-800 dark:text-white">
            <div className=" px-2 w-full ">
                <nav className="flex items-center justify-between  ">
                    <a
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <img
                            src="/json-genie.svg"
                            className="max-h-8"
                            alt="Shadcn UI Navbar"
                        />
                        <span className="text-lg text-slate-900  dark:text-white  font-semibold tracking-tighter">
                            JSON Genie
                        </span>
                    </a>
                    <div className="flex flex-row items-center gap-4">
                       
                        <div className="hidden items-center -red-500 gap-4 lg:flex">
                            {/* <Button className='dark:text-dark dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-2 dark:focus:bg-slate-900
                                text-foreground bg-white hover:bg-muted focus:ring-2 focus:bg-muted'>
                                <SettingsIcon className=" stroke-orange-500 dark:stroke-orange-500" />
                            </Button> */}
                            <DropdownMenu className="bg-white dark:bg-slate-800">
                                <DropdownMenuTrigger>
                                    <SettingsIcon className=" stroke-orange-500 dark:stroke-orange-500" />
                                </DropdownMenuTrigger>
                                
                                <DropdownMenuContent>
                                    <DropdownMenuLabel >
                                        {/* add a anchor link with text 'Online Text editor' */}
                                        <a href="https://note-swift.netlify.app/" target="_blank" className="text-sm">Online Text Editor</a>
                                    </DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        <a href="https://note-swift.netlify.app/scan" target="_blank" className="text-sm">Online OCR</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem >
                                        <a href="https://imranpashai.netlify.app/" target="_blank" className="text-sm font-semibold text-orange-500">About Me</a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>


                        </div>
                        <div className="hidden items-center  gap-4 lg:flex">
                            {/* <Button className='dark:text-dark dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-2 dark:focus:bg-slate-900
                                text-foreground bg-white hover:bg-muted focus:ring-2 focus:bg-muted'>
                                <Moon className=" stroke-orange-500 dark:stroke-orange-500" />
                            </Button> */}
                            <ThemeSwitch />
                        </div>
                    </div>
                   
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4  stroke-orange-500 dark:stroke-orange-500" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    
                                     <ThemeSwitch/>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                               
                                <div className="flex flex-col gap-6">
                                    <a href="https://note-swift.netlify.app/" target="_blank" className="text-sm">Online Text Editor</a>
                                    <a href="https://note-swift.netlify.app/scan" target="_blank" className="text-sm">Online OCR</a>
                                    <a href="https://imranpashai.netlify.app/" target="_blank" className="text-sm font-semibold text-orange-500">About Me</a>
                                    
                                </div>
                               
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
