import type { NextApiRequest, NextApiResponse } from 'next'
import XLSX from 'xlsx'
//
import urls from '../../constants/urls'

// type Data = {
//   name: string
// }

interface BantuanCatering {
  'Nama Pasien'?: string
  'Kota Pasien'?: string
  'Bantuan makanan yang diberikan'?: number
  __EMPTY?: number
  __EMPTY_1?: number
  __EMPTY_2?: number
  Status?: string
}
interface BantuanObat {
  'Nama Pasien'?: string
}
interface BantuanIsok {
  'Nama Pasien'?: string
  'Pengisian Tabung O2'?: number
  'Jumlah Oxtrat yang dipinjamkan'?: number
}
interface BantuanTelemedicine {
  'Nama Pasien Telemedicine'?: string
  'Kota Domisili Pasien'?: string
  'Jumlah sesi'?: number
}

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: NextApiResponse
) {
  let jumlahCatering = 0
  let jumlahObat = 0
  let jumlahRefillO2 = 0
  let jumlahTelerehab = 0
  let jumlahOksigenConcentrator = 0

  const r = await fetch(urls.FILE_LAPORAN)
  const arrayBuf = await r.arrayBuffer()
  const data = new Uint8Array(arrayBuf)
  const workbook = XLSX.read(data, { type: 'array' })

  const cateringSheet = workbook.Sheets['Bantuan Catering']
  const obatSheet = workbook.Sheets['Bantuan Obat']
  const isokSheet = workbook.Sheets['Bantuan ISOK']
  const telemedicineSheet = workbook.Sheets['Bantuan Telemedicine']

  // FILTER
  const cateringList = (
    XLSX.utils.sheet_to_json(cateringSheet) as BantuanCatering[]
  ).filter((c) => {
    if (c['Nama Pasien']) return true
    return false
  })
  const obatList = (
    XLSX.utils.sheet_to_json(obatSheet) as BantuanObat[]
  ).filter((o) => {
    if (o['Nama Pasien']) return true
    return false
  })
  const isokList = (
    XLSX.utils.sheet_to_json(isokSheet) as BantuanIsok[]
  ).filter((isok) => {
    if (isok['Nama Pasien']) return true
    return false
  })
  const telemedicineList = (
    XLSX.utils.sheet_to_json(telemedicineSheet) as BantuanTelemedicine[]
  ).filter((t) => {
    if (t['Nama Pasien Telemedicine']) return true
    return false
  })
  // end of - FILTER

  // HITUNG
  cateringList.forEach((c) => {
    if (c.__EMPTY_2) {
      jumlahCatering += c.__EMPTY_2
    }
  })
  jumlahObat = obatList.length
  isokList.forEach((isok) => {
    if (isok['Pengisian Tabung O2']) {
      jumlahRefillO2 += isok['Pengisian Tabung O2']
    }
    if (isok['Jumlah Oxtrat yang dipinjamkan']) {
      jumlahOksigenConcentrator += isok['Jumlah Oxtrat yang dipinjamkan']
    }
  })
  telemedicineList.forEach((t) => {
    if (t['Jumlah sesi']) {
      jumlahTelerehab += t['Jumlah sesi']
    }
  })
  // end of - HITUNG

  res.status(200).json({
    jumlahCatering,
    jumlahObat,
    jumlahRefillO2,
    jumlahTelerehab,
    jumlahOksigenConcentrator,
  })
}
