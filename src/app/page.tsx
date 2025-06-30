import FullPageScroll from "@/components/FullPageScroll";
import { About } from "./sections/About";
import { Introduction } from "./sections/Introduction";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { GithubRepo } from "@/types/github";
import { fetchRepos } from "@/lib/utils";

export default async function Home() {

  const repos = await fetchRepos() as GithubRepo[];

  return (
    <FullPageScroll sections={[
      { id: "introduction", content: <Introduction /> },
      { id: "about", content: <About /> },
      { id: "projects", content: <Projects repos={repos} /> },
      { id: "contact", content: <Contact /> }
    ]} />
  );
}
