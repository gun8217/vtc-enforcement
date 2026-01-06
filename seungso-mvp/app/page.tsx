export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">승소 환전소 MVP</h1>

      <p className="text-gray-600 mb-6">
        판결 이후 집행 가능성을 분석하고, 회수 전략을 제안하는 서비스입니다.
      </p>

      <section className="space-y-2">
        <div>📄 사건 등록</div>
        <div>📊 집행 가능성 분석</div>
        <div>💰 회수 전략 추천</div>
      </section>
    </main>
  );
}
