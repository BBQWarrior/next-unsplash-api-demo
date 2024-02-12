import Link from "next/link";
import { Searchbar } from "./Searchbar";

export type NavItem = {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    name: 'Landing Page',
    path: '/'
  },
  {
    name: 'Topics Page',
    path: '/topics'
  }
]

export const Header = () => {
  return (
    <nav className="flex flex-row sticky top-0 py-6 w-full px-10 bg-white z-50 items-center justify-between">
      <div className="flex flex-row gap-8">
      {
        navItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <div className="text-black">{item.name}</div>
          </Link>
        ))
      }
      </div>
      <Searchbar />
    </nav>
  )
}