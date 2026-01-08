import SessionTimeoutGuard from "@/components/SessionTimeoutGuard";

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
