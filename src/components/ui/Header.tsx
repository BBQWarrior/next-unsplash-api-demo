"use client"

import Link from "next/link";

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
    <nav className="flex flex-row gap-8 sticky top-0 py-4 w-full px-10 bg-white z-50">
      {
        navItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <div className="text-black">{item.name}</div>
          </Link>
        ))
      }
      <div>searchbar here</div>
    </nav>
  )
}