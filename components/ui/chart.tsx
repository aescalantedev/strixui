"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import type { TooltipContentProps } from "recharts"
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent"

import { cn } from "@/lib/utils"

const THEMES = { light: "", dark: ".dark" } as const

type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
    theme?: Record<keyof typeof THEMES, string>
  }
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a ChartContainer.")
  }
  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`
  
  // SOLUCIÓN "ZERO-WARNING": Medición real del contenedor
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

  React.useLayoutEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries[0]) return
      const { width, height } = entries[0].contentRect
      if (width > 0 && height > 0) {
        setDimensions({ width, height })
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const style = React.useMemo(() => {
    const customStyle: Record<string, string> = {}
    Object.entries(config).forEach(([key, item]) => {
      const color = item.theme?.light || item.color
      if (color) customStyle[`--color-${key}`] = color
    })
    return customStyle
  }, [config])

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={containerRef}
        data-chart={chartId}
        style={{ ...style, ...props.style } as React.CSSProperties}
        className={cn(
          "relative w-full text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-area]:fill-opacity-10 [&_.recharts-curve.recharts-area]:stroke-[2] [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-grid-line]:stroke-border/50 [&_.recharts-label]:fill-foreground [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <div className="h-full w-full absolute inset-0 min-h-0 min-w-0">
          {dimensions.width > 0 && dimensions.height > 0 ? (
            <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
              {children}
            </RechartsPrimitive.ResponsiveContainer>
          ) : (
            <div className="h-full w-full bg-muted/5 animate-pulse rounded-xl" />
          )}
        </div>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  )
  if (!colorConfig.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof THEMES] || itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Partial<TooltipContentProps<ValueType, NameType>> & {
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()
    if (!active || !payload?.length) return null

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        <div className="grid gap-1.5">
          {payload.map((item) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = config[key as keyof typeof config]
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div key={key} className="flex w-full flex-wrap items-center gap-2">
                <div
                  className={cn(
                    "shrink-0 rounded-[2px]",
                    {
                      "h-2 w-2": indicator === "dot",
                      "w-1 h-3": indicator === "line",
                    }
                  )}
                  style={{ backgroundColor: indicatorColor }}
                />
                <div className="flex flex-1 justify-between leading-none items-center">
                  <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                  {item.value && (
                    <span className="font-mono font-medium tabular-nums text-foreground ml-2">
                      {item.value.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltip"

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartStyle,
}
