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

  const acceptableLanguages = [
    "typescript",
    "javascript",
    "kotlin"
  ]

  const filtered = repos.filter((repo: GithubRepo) => {
    const isAcceptableLanguage = repo.language ? acceptableLanguages.includes(repo.language) : false
    return !repo.fork && !!repo.description && repo.description.length > 0 && isAcceptableLanguage
  });

  const sorted = filtered.sort(
    (a: GithubRepo, b: GithubRepo) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

  return sorted


}
