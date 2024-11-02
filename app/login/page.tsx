"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Github } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement actual login
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("ログインしました");
      router.push("/");
    } catch (error) {
      toast.error("ログインに失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">ログイン</h1>
          <p className="text-sm text-muted-foreground">
            アカウントにログインして、記事の投稿や管理を行いましょう
          </p>
        </div>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            disabled={isLoading}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHubでログイン
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                または
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type="password"
                required
                disabled={isLoading}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "ログイン中..." : "ログイン"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <Link
              href="/forgot-password"
              className="text-primary hover:underline"
            >
              パスワードをお忘れですか？
            </Link>
          </div>
          <div className="text-center text-sm">
            アカウントをお持ちでない方は
            <Link href="/signup" className="text-primary hover:underline ml-1">
              新規登録
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}