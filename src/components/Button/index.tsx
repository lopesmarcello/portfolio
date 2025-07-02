import { FileText } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  title: string;
  href: string
}

export function Button({ href, title }: ButtonProps) {
  return (
    <Link
      className="group relative inline-flex items-center overflow-hidden rounded-sm border border-current px-8 py-3 text-green-400 focus:ring-3 focus:outline-hidden"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FileText
        className="absolute -end-full transition-all group-hover:end-4"

      />

      <span className="text-sm font-medium transition-all group-hover:me-4"> {title} </span>
    </Link>
  )
}
