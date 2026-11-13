
import { useEffect, useId, useRef, useState } from 'react'

import { NOTIF_BLUE } from '@/bot/decor'
import { BotEngine, type BotFrame } from '@/bot/engine'
import { clamp, easings } from '@/bot/math'
import { EXPRESSION_BY_ID } from '@/bot/expressions'
import {
  COLOR_BY_ID,
  DEFAULT_COLOR,
  DEFAULT_SHAPE,
  SHAPE_BY_ID,
  mixHex
} from '@/bot/skins'
import { DEMI_VIEWBOX, RAYON } from '@/bot/repere'
import { lookTarget, TURN_TIME } from '@/ui/gaze'

interface MascotaTramaProps {
  size?: number
}

const VB = DEMI_VIEWBOX
const R = RAYON

const SHAPE = SHAPE_BY_ID.get(DEFAULT_SHAPE)?.radii ?? null
const INK = COLOR_BY_ID.get(DEFAULT_COLOR)?.hex ?? '#0a0a0c'
const SURPRISED = EXPRESSION_BY_ID.get('surpris') ?? null

const PAPER = '#f9f9f9'

const IDLE_DELAY = 1.5
const MOVEMENT_THRESHOLD = 5

const ORBIT_DURATION = 3.4
const BLASE_DURATION = 0.85

type ExpressionId = 'surpris' | 'colere' | 'blase'

export default function MascotaTrama({
  size = 320
}: MascotaTramaProps) {
  const reactId = useId()
  const uid = `trama-bot-${reactId.replace(/:/g, '')}`
  const maskId = `${uid}-mask`

  const svgRef = useRef<SVGSVGElement | null>(null)
  const engineRef = useRef<BotEngine | null>(null)

  if (!engineRef.current) {
    engineRef.current = new BotEngine(
      R,
      'orbit',
      SHAPE,
      SURPRISED
    )
  }

  const engine = engineRef.current

  const [frame, setFrame] = useState<BotFrame>(
    () => engine.sample(0)
  )

  useEffect(() => {
    let raf = 0
    let last = 0
    let clock = 0

    let orbitFinished = false

    let pointer: { x: number; y: number } | null = null

    let inside = false
    let aiming = false

    let enteredAt = 0
    let lastMoveAt = 0
    let leftAt: number | null = null

    let lastX = 0
    let lastY = 0

    let currentExpression: ExpressionId = 'surpris'

    function setExpression(id: ExpressionId) {
      if (currentExpression === id) return

      const expression = EXPRESSION_BY_ID.get(id)

      if (!expression) return

      currentExpression = id
      engine.setExpression(expression, clock)
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === 'touch') return

      const box = svgRef.current?.getBoundingClientRect()

      if (!box || box.width === 0 || box.height === 0) {
        return
      }

      const isOver =
        event.clientX >= box.left &&
        event.clientX <= box.right &&
        event.clientY >= box.top &&
        event.clientY <= box.bottom

      if (!isOver) {
        if (inside) {
          inside = false
          pointer = null
          aiming = false
          leftAt = clock

          engine.setLook(null, clock, TURN_TIME)
          setExpression('blase')
        }

        return
      }

      pointer = {
        x: event.clientX,
        y: event.clientY
      }

      if (!inside) {
        inside = true
        enteredAt = clock
        lastMoveAt = clock
        leftAt = null

        lastX = event.clientX
        lastY = event.clientY

        setExpression('surpris')
        return
      }

      const dx = event.clientX - lastX
      const dy = event.clientY - lastY
      const distance = Math.hypot(dx, dy)

      if (distance >= MOVEMENT_THRESHOLD) {
        lastMoveAt = clock
        lastX = event.clientX
        lastY = event.clientY

        // El movimiento recupera la expresión sorprendida.
        setExpression('surpris')
      }
    }

    function aim() {
      if (!inside || !pointer) {
        if (aiming) {
          engine.setLook(null, clock, TURN_TIME)
          aiming = false
        }

        return
      }

      const box = svgRef.current?.getBoundingClientRect()

      if (!box || box.width === 0 || box.height === 0) {
        return
      }

      engine.setLook(
        lookTarget({
          nx: clamp(
            (pointer.x - (box.left + box.width / 2)) /
              Math.max(1, window.innerWidth / 2),
            -1,
            1
          ),
          ny: clamp(
            (pointer.y - (box.top + box.height / 2)) /
              Math.max(1, window.innerHeight / 2),
            -1,
            1
          ),
          tour: easings.easeOutQuint(
            clamp((clock - enteredAt) / TURN_TIME)
          ),
          pointer: true
        }),
        clock
      )

      aiming = true
    }

    function tick(ms: number) {
      raf = requestAnimationFrame(tick)

      const dt = last
        ? Math.min((ms - last) / 1000, 0.064)
        : 0

      last = ms
      clock += dt

      // La órbita original termina y da paso a la esfera.
      if (!orbitFinished && clock >= ORBIT_DURATION) {
        orbitFinished = true
        engine.setState('idle', clock)
      }

      // Interacción habilitada una vez terminada la entrada.
      if (orbitFinished) {
        if (inside) {
          const idleTime = clock - lastMoveAt

          if (idleTime >= IDLE_DELAY) {
            setExpression('colere')
          }
        }

        // No impresionada vuelve a sorprendida.
        if (
          !inside &&
          leftAt !== null &&
          clock - leftAt >= BLASE_DURATION
        ) {
          setExpression('surpris')
          leftAt = null
        }

        aim()
      }

      setFrame(engine.sample(clock))
    }

    window.addEventListener('pointermove', onPointerMove)

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [engine])

  function renderDot(
    dot: BotFrame['dots'][number],
    key: string
  ) {
    const fill =
      dot.color ??
      (dot.depth === undefined
        ? INK
        : mixHex(PAPER, INK, dot.depth))

    const common = {
      key,
      fill,
      opacity: dot.opacity
    }

    if (dot.d) {
      return (
        <path
          {...common}
          d={dot.d}
          transform={`translate(${dot.x} ${dot.y}) rotate(${dot.rot ?? 0}) scale(${R})`}
        />
      )
    }

    return (
      <circle
        {...common}
        cx={dot.x}
        cy={dot.y}
        r={dot.r}
      />
    )
  }

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`${-VB} ${-VB} ${VB * 2} ${VB * 2}`}
      role="img"
      aria-label="Mascota animada de Trama"
    >
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x={-VB}
          y={-VB}
          width={VB * 2}
          height={VB * 2}
        >
          <path d={frame.bodyPath} fill="#fff" />

          {frame.eyes.map((eye, i) => (
            <path
              key={i}
              d={eye.d}
              transform={eye.matrix}
              opacity={eye.alpha}
              fill="#000"
            />
          ))}

          {frame.notch && (
            <circle
              cx={frame.notch.x}
              cy={frame.notch.y}
              r={frame.notch.r}
              fill="#000"
            />
          )}
        </mask>

        {frame.arcs.map((arc) => (
          <linearGradient
            key={arc.id}
            id={`${uid}-${arc.id}`}
            gradientUnits="userSpaceOnUse"
            x1={arc.grad.x1}
            y1={arc.grad.y1}
            x2={arc.grad.x2}
            y2={arc.grad.y2}
          >
            {arc.grad.stops.map((color, i) => (
              <stop
                key={i}
                offset={i / (arc.grad.stops.length - 1)}
                stopColor={color}
              />
            ))}
          </linearGradient>
        ))}
      </defs>

      {/* Parte trasera de las órbitas */}
      <g fill="none" strokeLinecap="round">
        {frame.arcs.map((arc) => (
          <path
            key={`b${arc.id}`}
            d={arc.back}
            stroke={`url(#${uid}-${arc.id})`}
            strokeWidth={arc.width}
            opacity={arc.opacity}
          />
        ))}
      </g>

      {/* Partículas detrás del cuerpo */}
      {frame.dotsBehind && (
        <g>
          {frame.dots.map((dot, i) =>
            renderDot(dot, `pb${i}`)
          )}
        </g>
      )}

      {/* Cuerpo y rostro */}
      <g opacity={frame.bodyAlpha}>
        <path
          d={frame.bodyPath}
          fill={PAPER}
        />

        <g mask={`url(#${maskId})`}>
          <rect
            x={-VB}
            y={-VB}
            width={VB * 2}
            height={VB * 2}
            fill={INK}
          />
        </g>
      </g>

      {/* Partículas delante del cuerpo */}
      {!frame.dotsBehind && (
        <g>
          {frame.dots.map((dot, i) =>
            renderDot(dot, `pf${i}`)
          )}
        </g>
      )}

      {/* Notificación */}
      {frame.notif && (
        <circle
          cx={frame.notif.x}
          cy={frame.notif.y}
          r={frame.notif.r}
          fill={NOTIF_BLUE}
        />
      )}

      {/* Parte delantera de las órbitas */}
      <g fill="none" strokeLinecap="round">
        {frame.arcs.map((arc) => (
          <path
            key={`f${arc.id}`}
            d={arc.front}
            stroke={`url(#${uid}-${arc.id})`}
            strokeWidth={arc.width}
            opacity={arc.opacity}
          />
        ))}
      </g>
    </svg>
  )
}
