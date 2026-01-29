import SessionTimeoutGuard from "@/components/auth/SessionTimeoutGuard";

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionTimeoutGuard />
      {children}
    </>
  );
}
