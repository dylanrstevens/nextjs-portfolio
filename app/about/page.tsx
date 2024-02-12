import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
	return (
		<main>
		<section className="flex flex-row items-center justify-center 2xl:pt-32 pt-20 px-4 pb-32 flex-wrap">
			<div className="flex flex-col items-center">
				<div className="inline-block max-w-2xl text-center justify-center max-w">
					<h1 className={title({size: "sm"})}>
						Hi! My name is Dylan Stevens.
						<br/><br/>
					</h1>
					<h1 className="text-justify text-lg font-semibold text-default-500">
						I have been working in the technology field for 2 years. I am currently obtaining a degree (B.Sc, Computer Science) from the University of Victoria. I&apos;ve previously worked as a front end web application developer for an 8-month co-op contract, and currently working as a front end voice-app python developer for L1 Scientific LTD (see more in <Link underline="hover" href="/resume" size="lg" color={"primary"}>resumé</Link> section).
						<br/><br/>
						Living in British Columbia, I&apos;m currently based in the cities of Victoria and Vancouver, and hope to contribute to the growing technology sector in the pacific northwest. 
						<br/><br/>
						I&apos;m particularly interested in software development that focuses on designing and programming software for embedded systems, and other specialized computing devices embedded within larger systems or products.
						<br/><br/>
						Outside of the work force, I&apos;m passionate about skiing, biking, and many other outdoor recreations.
						<br/><br/>
						Thank you for visiting my website and reading about me. Please feel free to send me an email (dylan@dylanstevens.ca) to reach out, and check out my resume for a record of my skills and employment history.
					</h1>
				</div>
			</div>
		</section>
		</main>
	);
}
