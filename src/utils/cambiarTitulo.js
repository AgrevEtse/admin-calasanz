export const cambiarTitulo = (titulo) => {
  if (!titulo) {
    document.title = '? - Admin Calasanz'
    return
  }

  document.title = `${titulo} - Admin Calasanz`
}