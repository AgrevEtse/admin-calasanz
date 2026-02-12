import { z } from 'zod'
// const datetime = z.iso.datetime();
// const date = z.iso.date();

export const CicloSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  // XXX: DESCOMENTAR CUANDO EXISTA BACHILLERATO
  // es_anual: z.boolean('El tipo de ciclo es requerido'),
  fecha_inicio: z.string().min(1, 'La fecha de inicio es requerida'),
  fecha_fin: z.string().min(1, 'La fecha de fin es requerida')
})
