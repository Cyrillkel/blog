"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          МойБлог
        </Link>
        <div className="space-x-4">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "text-gray-700 hover:text-blue-600 transition-colors",
                "text-sm sm:text-base", // Адаптивные размеры текста
                {
                  "text-blue-600 font-medium border-b-2 border-blue-600":
                    pathname === link.href,
                  // Можно добавить подчеркивание для активной ссылки:
                  // "border-b-2 border-blue-600": pathname === link.href
                }
              )}
            >
              {" "}
              {link.lable}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
