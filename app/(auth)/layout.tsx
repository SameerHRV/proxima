interface LayoutProps {
  children: React.ReactNode;
}
const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <main className="auth">
      {children}
    </main>
  )
};

export default LayoutPage;
