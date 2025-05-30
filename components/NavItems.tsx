'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'},
    {label: 'My Journey', href: '/my-journey'},
]

const NavItems = () => {
    const pathName = usePathname()
    return (
        <nav className="flex items-center gap-4 max-md:hidden">
            {navItems.map(({label, href}) => (
                <Link href={href} key={label} className={cn(pathName === href && ' text-[#FE5933] font-semibold')}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}
export default NavItems
