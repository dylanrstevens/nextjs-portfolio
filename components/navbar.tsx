'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { usePathname } from "next/navigation";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	LinkedInIcon,
	EmailIcon,
} from "@/components/icons";

export const Navbar = () => { 

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="bg-background shadow-lg dark:shadow-[#111111] light:shadow-[#DDDDDD]">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						
						<p className="font-bold text-inherit">Dylan Stevens</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden md:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<Link
								color={
									item.href === usePathname()
										? "primary"
										: "foreground"
								}
								href={item.href}
								isBlock
								size="md"
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
						<LinkedInIcon className="text-primary-700" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-secondary-700" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
            isExternal
						as={Link}
						className="text-sm font-normal text-foreground bg-default-300"
						href={siteConfig.links.sponsor}
						startContent={<EmailIcon className="" />}
						variant="flat"
					>
						Email Me
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
					<Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
						<LinkedInIcon className="text-primary-700" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-secondary-700" />
					</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									item.href === usePathname()
										? "primary"
										: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
