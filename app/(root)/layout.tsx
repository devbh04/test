import AppBar from "@/components/shared/appbar";
import Footer from "@/components/shared/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col max-w-full">
      <AppBar/>
      <main className="flex-1 pt-44 xl:pt-40"> {/* Added pt-32 to give space for the floating AppBar */}
        {children}
      </main>
      <Footer />
    </div>
  );
}