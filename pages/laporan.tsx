import { ResponsivePie } from '@nivo/pie'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
//
import Container from '../components/Container'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { APP_TITLE } from '../constants/datas'

const TITLE = `Laporan | ${APP_TITLE}`
const DESCRIPTION = `Lihat rekapitulasi dan laporan program ${APP_TITLE} di sini.`
const URL = 'https://temanhijrah.id/laporan'

interface DataPie {
  id: string
  label: string
  value: number
  color: string
}

interface DataApi {
  jumlahCatering: number
  jumlahObat: number
  jumlahRefillO2: number
  jumlahTelerehab: number
  jumlahOksigenConcentrator: number
}

export default function Laporan() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)
  const [dataPie, setDataPie] = React.useState<DataPie[]>([])

  async function fetchData() {
    try {
      const f = await fetch('/api/laporan')
      const data: DataApi = await f.json()

      setDataPie([
        {
          id: 'Catering',
          label: 'Catering',
          value: data.jumlahCatering,
          color: 'hsl(11, 70%, 50%)',
        },
        {
          id: 'Obat-Obatan',
          label: 'Obat-Obatan',
          value: data.jumlahObat,
          color: 'hsl(166, 70%, 50%)',
        },
        {
          id: 'Refill Tabung O₂',
          label: 'Refill Tabung O₂',
          value: data.jumlahRefillO2,
          color: 'hsl(167, 70%, 50%)',
        },
        {
          id: 'Telerehab/Telemedis',
          label: 'Telerehab/Telemedis',
          value: data.jumlahTelerehab,
          color: 'hsl(150, 70%, 50%)',
        },
        {
          id: 'Oksigen Concentrator',
          label: 'Oksigen Concentrator',
          value: data.jumlahOksigenConcentrator,
          color: 'hsl(132, 70%, 50%)',
        },
      ])
      setLoading(false)
    } catch (e) {
      // ...
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  const menuList = React.useMemo(
    () => [
      {
        label: 'Program Kami',
        onClick: () => {
          router.push('/')
        },
      },
      {
        label: 'Butuh dibantu',
        onClick: () => {
          router.push('/')
        },
      },
      {
        label: 'Mau Membantu',
        onClick: () => {
          router.push('/')
        },
      },
      {
        label: 'Laporan',
        onClick: () => {
          router.push('/laporan')
        },
      },
    ],
    [router]
  )

  const PieChart = ({ data }: { data: any }) => (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0}
      padAngle={0}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 50,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  )

  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
      </Head>

      <Container>
        <Header menuList={menuList} />
        <div className="mt-1 ">
          <div className="text-2xl sm:text-3xl font-bold flex justify-center mt-6">
            LAPORAN TERKINI
          </div>
          <div style={{ height: 500 }}>
            {!loading && <PieChart data={dataPie} />}
            {loading && (
              <div className="py-10">
                <div className="flex justify-center">
                  <Loading />
                </div>
                <div className="text-xs text-center mt-2 text-gray-500">
                  Memperbarui data&hellip;
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
