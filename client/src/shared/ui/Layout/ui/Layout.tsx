import { LayoutContainer, MainContent } from './Layout.styles';
import { Navbar } from '@/shared/ui/Navbar';
import { Footer } from '@/shared/ui/Footer';
import { LayoutProps } from '../model/types';

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
}

