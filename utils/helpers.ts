export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })
