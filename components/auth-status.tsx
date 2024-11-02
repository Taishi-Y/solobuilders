"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, PenSquare, LogOut } from "lucide-react";

// TODO: Replace with actual auth implementation
const mockUser = {
  name: "開発太郎",
  email: "dev@example.com",
  image: null,
};

export function AuthStatus() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate auth check
  useEffect(() => {
    setIsAuthenticated(true); // For demo purposes
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="ghost" asChild>
          <Link href="/login">ログイン</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">新規登録</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <User className="w-5 h-5 mr-2" />
          <span>{mockUser.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/write" className="flex items-center">
            <PenSquare className="w-4 h-4 mr-2" />
            記事を書く
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          <LogOut className="w-4 h-4 mr-2" />
          ログアウト
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}