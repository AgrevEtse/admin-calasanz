export const cambiarTitulo = (titulo) => {
  if (!titulo) {
    document.title = '? - Calasanz Admin'
    return
  }

  document.title = `${titulo} - Calasanz Admin`
}
