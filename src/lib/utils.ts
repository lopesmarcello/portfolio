import { GithubRepo } from "@/types/github";

export function navigateTo(name: "Home" | "About" | "Projects", goToIndex?: (index: number) => void) {
  if (!goToIndex) return

  switch (name) {
    case "Home":
      goToIndex(0);
      break;
    case "About":
      goToIndex(1);
      break;
    case "Projects":
      goToIndex(2);
      break;
    default:
      console.warn("Unknown section name:", name);
  }
}

export const fetchRepos = async () => {
  const res = await fetch('https://api.github.com/users/lopesmarcello/repos', {
    next: { revalidate: 3600 },
  });

  const repos = await res.json() as GithubRepo[];

  // TODO: filter js/ts projects

  const showcasedLanguages = [
    'javascript',
    'typescript'
  ]

  const filteredRepos = repos.filter(item => (!!item.description && item.description.length > 0 && item.language && showcasedLanguages.includes(item.language.toLowerCase())))

  return filteredRepos.sort(
    (a: GithubRepo, b: GithubRepo) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );


}
