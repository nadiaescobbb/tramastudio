
import MascotaTrama from '@/components/MascotaTrama'

const MascotaPreview = () => {
  return (
    <main className="min-h-screen bg-[#FBFBFA] text-[#111111] flex flex-col items-center justify-center gap-10 px-6 py-16">
      <header className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/45">
          HeyTrama · Mascota
        </p>

        <h1 className="mt-3 font-heading text-3xl font-normal">
          Prueba de comportamiento
        </h1>
      </header>

      <div className="flex items-center justify-center">
        <MascotaTrama size={420} />
      </div>

      <p className="max-w-sm text-center font-mono text-[10px] leading-relaxed tracking-wide text-black/45">
        Ciclo autónomo · Seguimiento del cursor · Animaciones originales
      </p>
    </main>
  )
}

export default MascotaPreview
