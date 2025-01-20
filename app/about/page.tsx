import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
	return (
		<main>
		<section className="flex flex-row items-center justify-center 2xl:pt-32 pt-20 px-8 pb-32 flex-wrap">
			<div className="flex flex-col items-center">
				<div className="inline-block max-w-2xl text-center justify-center max-w">
					<h1 className={title({size: "sm"})}>
						Hi! My name is Dylan Stevens.
						<br/><br/>
					</h1>
					<h1 className="text-justify text-lg font-semibold text-default-500">
						I currently have a bachelor of science (B.Sc.) in computer science from the University of Victoria, British Columbia. I am currently working as a Solutions Engineer for MiCROTEC US in Oregon.
						<br></br>
						I&apos;ve previously worked as a front end web application developer for the BC Pension Corporation, and as a voice-app python developer for L1 Scientific LTD (see more in <Link underline="hover" href="/resume" size="lg" color={"primary"}>resumé</Link> section).
						<br/><br/>
						My interests focus on designing and programming software solutions for embedded systems, and other specialized computing devices within larger systems or products, and the impact that eco-technology has on environmental industries. I have work experience developing for specialized computing devices, cloud computing, and web development. 
						<br/><br/>
						Outside of the work force, I&apos;m passionate about skiing, biking, and many other outdoor recreations.
						<br/><br/>
						Thank you for visiting my website and reading about me. Please feel free to send me an email (dylan@dylanstevens.ca) to reach out.
					</h1>
				</div>
			</div>
		</section>
		</main>
	);
}
