import Footer from '@/components/Footer';
import GradientBackground from '@/components/GradientBackground';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GradientBackground />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
