export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Dylan Stevens",
	description: "Welcome to Dylan Stevens's Portfolio Website",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		label: "About",
		href: "/about",
		},
		{
		label: "Contact",
		href: "/contact",
		},
		{
		label: "Portfolio",
		href: "/portfolio",
		},
		{
		label: "Résume",
		href: "/resume",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
			},
		{
		label: "About",
		href: "/about",
		},
		{
		label: "Contact",
		href: "/contact",
		},
		{
		label: "Portfolio",
		href: "/portfolio",
		},
		{
		label: "Resume",
		href: "/resume",
		}
	],
	links: {
		github: "https://github.com/dylanrstevens",
		twitter: "/",
		docs: "/",
		linkedin: "https://www.linkedin.com/in/dylan-stevens-b1460625b/",
    sponsor: "mailto:dylan@dylanstevens.ca"
	},
};
