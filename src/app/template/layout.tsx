import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
} from "@/components/Navbar";
import { SidebarLayout } from "@/components/SidebarLayout";
import { TemplateSidebar } from "./_components/TemplateSidebar";

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSection>
            <NavbarItem href="/">
              <NavbarLabel>コンポーネント テンプレート</NavbarLabel>
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      }
      sidebar={<TemplateSidebar />}
    >
      {children}
    </SidebarLayout>
  );
}
