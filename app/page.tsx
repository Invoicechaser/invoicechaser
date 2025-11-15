export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">INVOICE CHASER</h1>
        <p className="text-xl text-gray-400 mb-8">Automatisches Mahnwesen</p>
        <a 
          href="/onboarding"
          className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold inline-block"
        >
          Jetzt starten
        </a>
      </div>
    </div>
  )
}
