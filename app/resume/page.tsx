import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function DocsPage() {
	return (
		<main>
		<section className="flex flex-row items-center justify-center 2xl:pt-32 pt-20 px-8 pb-32 flex-wrap">
			<div className="flex flex-col items-center">
				<div className="inline-block max-w-2xl text-center justify-center max-w">
					<h1 className={title({size: "sm"})}>
						Dylan Stevens.
					</h1>
					<br/><br/>
					<h1 className="text-lg font-semibold text-default-500">
					dylan@dylanstevens.ca | https://github.com/dylanrstevens
					</h1>
					<br/><br/>
					<h1 className={title({size: "sm"})}>
						Experience
					</h1>
					<br/><br/>
					<h1 className="text-xl font-semibold text-foreground">
						PYTHON DEVELOPLER | L1 SCIENTIFIC LTD | SEPTEMBER 2023 – MAY 2024
					</h1>
					<br/>
					<h1  className="text-lg font-semibold text-default-500"> 
						<li>
						Worked as the primary front-end voice application developer for a small startup company.
						</li>
						<li>
						Participated in software development of Amazon Alexa skills in python.
						</li>
						<li>
							Wrote, tested, and reviewed code and bugs for new and existing applications.
						</li>
						<li>
							Worked as a team lead for projects, including the planning, writing, testing, and reviewing of apps starting from scratch.
						</li>
					</h1>
					<br/>
					<h1 className="text-xl font-semibold text-foreground">
						APPLICATION DEVELOPLER CO-OP | BC PENSION CORPORATION | MAY 2022 – DECEMBER 2022
					</h1>
					<br/>
					<h1  className="text-lg font-semibold text-default-500"> 
						<li>
						Participated in full-stack software design and development for web-based applications.
						</li>
						<li>
						Numerous APIs to connect our applications to various other software’s and services.
						</li>
						
						<li>
						Wrote, tested, and reviewed code for new features implemented in existing core systems.
						</li>
						<li>
						Evaluated and rolled out new technologies and solutions for ongoing projects.
						</li>
						<li>
						Participated in team based and solo projects, using remote software development methods including the use of Git.
						</li>
					</h1>
					<br/><br/>
					<h1 className={title({size: "sm"})}>
						Education
					</h1>
					<br/><br/>
					<h1 className="text-xl font-semibold text-foreground">
						COMPUTER SCIENCE CO-OP MAJOR | BACHELORS | UNIVERSITY OF VICTORIA | SEP 2020 - DECEMBER 2024
					</h1>
					<br/><br/>
					<h1  className="text-lg font-semibold text-default-500">
					Related course work includes: Computer Architecture, Data Structures and Algorithms, Software Development Methods, Computer Networks and Communications, Operating Systems, Database Systems, Data Compression, Artificial Intelligence, GPU Computing 
					</h1>
					<br/><br/>
					<h1 className={title({size: "sm"})}>
						Skills & Abilities
					</h1>
					<br/><br/>
					<h1  className="text-lg font-semibold text-default-500"> 
					<li>
					Experience in writing, designing, testing, and shipping software in a professional, and personal setting.
					</li>
					<li>
					Experience with the entire stack of the remote development cycle.
					</li>
					<li>
					Excellent verbal and written communication skills.
					</li>
					<li>
					Ability to problem solve in teams, as well as independently.
					</li>
					</h1>
				</div>
			</div>
		</section>
		</main>
	);
}
