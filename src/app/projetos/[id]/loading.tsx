export default function LoadingProjeto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#9538F2] border-opacity-30"></div>
      <p className="mt-4 text-[#9538F2] font-semibold text-lg">Carregando projeto...</p>
    </div>
  )
}
