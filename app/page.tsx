import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import profilePhotoImage from '../public/image3.png';

export default function Home() {
	return (
		<main className=" h-full w-full justify-center flex items-center pb-24 pt-8">
		<section className="flex flex-row items-center justify-center gap-4 flex-wrap ">
			<div className="flex flex-col items-center ">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>
						Solutions Engineer at 
					</h1>
					<h1 className={title({ color: "cyan" })}>MiCROTEC&nbsp;</h1>
					<h1 className={title()}>
						US. 
					</h1>
					<h2 className={subtitle({ class: "mt-4 mb-4" })}>
						Based in Oregon, USA.
					</h2>
				</div>

				<div className="flex gap-3">
					<Link
						href="https://www.linkedin.com/in/dylan-stevens-b1460625b/"
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						LinkedIn
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

			</div>
			<div className="">
				<Image
					className="rounded-full shadow-[inset_0_35px_60px_-15px_rgba(0,0,0,0.5)]"
					src={profilePhotoImage}
					width={250}
					height={250}
					alt="Memoji of Dylan Stevens"
				/>
			</div>
		</section>
		</main>
	);
}
