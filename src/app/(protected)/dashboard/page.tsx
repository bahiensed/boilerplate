import { Metadata } from 'next'
import { ChartAreaGradient } from '@/components/charts/area-chart'
import { ChartBarDefault } from '@/components/charts/bar-chart'
import { ChartBarHorizontal } from '@/components/charts/bar-chart-horizontal'
import { ChartBarMultiple } from '@/components/charts/bar-chart-multiple'
import { ChartLineDefault } from '@/components/charts/line-chart'
import { ChartLineLinear } from '@/components/charts/line-chart-linear'
import { ChartLineMultiple } from '@/components/charts/line-chart-multiple'
import { ChartLineStep } from '@/components/charts/line-chart-step'
import { ChartPieDonut } from '@/components/charts/pie-chart-donut'
import { ChartRadarDots } from '@/components/charts/radar-chat-dots'
import { ChartRadarGridCircle } from '@/components/charts/radar-chart-grid-circle'
import { ChartRadialSimple } from '@/components/charts/radial-chart'
import { ChartRadialShape } from '@/components/charts/radial-chart-shape'
import { ChartRadialStacked } from '@/components/charts/radial-chart-stacked'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Boilerplate | Dashboard',
}

export default function Dashboard() {
  return (
    <>
      <div className="flex items-start justify-between min-h-15 lg:min-h-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="font-extrabold mb-6 scroll-m-20 text-4xl text-balance tracking-tight">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ChartAreaGradient />
        <ChartBarDefault />
        <ChartBarHorizontal />
        <ChartBarMultiple />
        <ChartLineDefault />
        <ChartLineLinear />
        <ChartLineMultiple />
        <ChartLineStep />
        <ChartPieDonut />
        <ChartRadarDots />
        <ChartRadarGridCircle />
        <ChartRadialSimple />
        <ChartRadialShape />
        <ChartRadialStacked />
      </div>
    </>
  )
}
