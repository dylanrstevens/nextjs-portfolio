import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function DocsPage() {
	return (
		<main>
		<section className="flex flex-row items-center justify-center pt-8 pb-32 flex-wrap">
			<div className="flex flex-col items-center">
				<div className="inline-block max-w-2xl text-center justify-center max-w">
					<h1 className={title()}>
						Resume will go here
					</h1>
				</div>
			</div>
		</section>
		</main>
	);
}
