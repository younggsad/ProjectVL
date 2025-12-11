// app/settings/page.tsx
import { getToken } from "next-auth/jwt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const secret = process.env.NEXTAUTH_SECRET!;

const SettingsPage = async () => {
  const cookieStore = await cookies();

  // Передаём куки в getToken для получения сессии
  const token = await getToken({
    secret,
    req: {
      headers: Object.fromEntries(cookieStore.getAll().map(c => [c.name, c.value])),
    },
  });

  if (!token) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1>Settings Page</h1>
      <pre>{JSON.stringify(token, null, 2)}</pre>
    </div>
  );
};

export default SettingsPage;
