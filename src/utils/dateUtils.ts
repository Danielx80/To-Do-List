export const formatDate = (date?: string | Date) => {
  // no valores nulos 
  if (!date) return "Fecha no disponible"; 

  const d = new Date(date);
  if (isNaN(d.getTime())) return "Fecha inválida"; // Manejo de errores en fechas incorrectas

  return d.toLocaleString("es-MX", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, 
  });
};
