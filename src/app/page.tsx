import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Purpose from '@/components/purpose/Purpose';
import Process from '@/components/process/Process';
import Portfolio from '@/components/portfolio/Portfolio';
import ConsultationForm from '@/components/contact/ConsultationForm';
import FooterNav from '@/components/footer-nav/FooterNav';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Purpose />
        <Process />
        <Portfolio />
        <ConsultationForm />
      </main>
      <FooterNav />
    </>
  );
}
