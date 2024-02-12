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
    <nav className="flex flex-row gap-4">
      {
        navItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <div>{item.name}</div>
          </Link>
        ))
      }
    </nav>
  )
}