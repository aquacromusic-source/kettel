'use client'
import { T, CORD_COLORS, FINISHES, GRAV_FONTS } from './tokens'
import { SportIcon } from './Icons'
import { useId } from 'react'

type CordColor = typeof CORD_COLORS[0]
type Finish = typeof FINISHES[0]
type GravFont = typeof GRAV_FONTS[0]

interface BraceletPreviewProps {
  text?: string
  mode?: 'name' | 'initials' | 'logo'
  sport?: string
  cordColor?: CordColor
  finish?: Finish
  font?: GravFont
  width?: number
  height?: number
  compact?: boolean
}

export default function BraceletPreview({
  text = '',
  mode = 'name',
  sport = 'football',
  cordColor = CORD_COLORS[7], // Orange STRAP. par défaut — visible sur fond sombre
  finish = FINISHES[0],
  font = GRAV_FONTS[0],
  width = 560,
  height = 260,
  compact = false,
}: BraceletPreviewProps) {
  const engrave = (text || '').slice(0, 30)
  const len = engrave.length
  let fontSize: number
  if (mode === 'initials') {
    fontSize = Math.max(22, 42 - Math.max(0, len - 3) * 4)
  } else if (mode === 'logo') {
    fontSize = 0
  } else {
    if (len <= 6) fontSize = 28
    else if (len <= 12) fontSize = 22
    else if (len <= 20) fontSize = 16
    else fontSize = 13
  }

  const plateW = 150
  const plateH = 54
  const cx = width / 2
  const cy = height / 2
  const uid = useId().replace(/:/g, '')
  const cordId = `cord-${cordColor.id}-${uid}`
  const weaveId = `weave-${cordColor.id}-${uid}`

  return (
    <div style={{
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      background: compact
        ? 'transparent'
        : `radial-gradient(ellipse at 40% 50%, #1E1020 0%, #0D0D12 50%, ${T.ink} 100%)`,
      borderRadius: 12,
    }}>
      {!compact && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${T.line2} 1px, transparent 1px), linear-gradient(90deg, ${T.line2} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}/>
      )}

      <svg width={width} height={height} style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id={cordId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={cordColor.hex} stopOpacity="0.6"/>
            <stop offset="0.5" stopColor={cordColor.hex} stopOpacity="1"/>
            <stop offset="1" stopColor={cordColor.hex} stopOpacity="0.55"/>
          </linearGradient>
          <pattern id={weaveId} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="6" fill={cordColor.hex}/>
            <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(0,0,0,0.25)" strokeWidth="1.2"/>
            <line x1="3" y1="0" x2="3" y2="6" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
          </pattern>
        </defs>
        {/* Glow sous le cordon */}
        <path
          d={`M ${cx - width/2 + 30} ${cy + 6} Q ${cx - 120} ${cy - 10}, ${cx - plateW/2 - 4} ${cy} L ${cx + plateW/2 + 4} ${cy} Q ${cx + 120} ${cy - 10}, ${cx + width/2 - 30} ${cy + 6}`}
          stroke={cordColor.hex}
          strokeWidth="22"
          fill="none"
          strokeLinecap="round"
          opacity="0.15"
        />
        <path
          d={`M ${cx - width/2 + 30} ${cy + 6} Q ${cx - 120} ${cy - 10}, ${cx - plateW/2 - 4} ${cy} L ${cx + plateW/2 + 4} ${cy} Q ${cx + 120} ${cy - 10}, ${cx + width/2 - 30} ${cy + 6}`}
          stroke={`url(#${weaveId})`}
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        {/* Highlight supérieur */}
        <path
          d={`M ${cx - width/2 + 30} ${cy + 4} Q ${cx - 120} ${cy - 12}, ${cx - plateW/2 - 4} ${cy - 2} L ${cx + plateW/2 + 4} ${cy - 2} Q ${cx + 120} ${cy - 12}, ${cx + width/2 - 30} ${cy + 4}`}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`M ${cx - width/2 + 30} ${cy + 8} Q ${cx - 120} ${cy - 8}, ${cx - plateW/2 - 4} ${cy + 2} L ${cx + plateW/2 + 4} ${cy + 2} Q ${cx + 120} ${cy - 8}, ${cx + width/2 - 30} ${cy + 8}`}
          stroke="rgba(0,0,0,0.6)"
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        />
      </svg>

      {/* Plate */}
      <div style={{
        position: 'absolute',
        left: cx - plateW/2,
        top: cy - plateH/2,
        width: plateW,
        height: plateH,
        borderRadius: 8,
        background: finish.swatch,
        boxShadow: '0 8px 30px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.12) inset, 0 1px 0 rgba(255,255,255,0.3) inset',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10px',
        overflow: 'hidden',
      }}>
        {mode === 'name' && engrave && (
          <span style={{
            fontFamily: font.css,
            fontWeight: font.weight,
            fontSize,
            color: finish.id === 'noir' ? '#F0EDE6' : '#1A1A1D',
            letterSpacing: font.id === 'mono' ? '0.08em' : '-0.01em',
            textTransform: font.id === 'mono' ? 'uppercase' : 'none',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 0 rgba(0,0,0,0.15)',
            transition: 'font-size .15s ease',
          }}>{engrave}</span>
        )}
        {mode === 'initials' && (
          <span style={{
            fontFamily: font.css,
            fontWeight: 700,
            fontSize,
            color: finish.id === 'noir' ? '#F0EDE6' : '#1A1A1D',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}>{engrave.toUpperCase() || 'AB'}</span>
        )}
        {mode === 'logo' && (
          <div style={{ color: finish.id === 'noir' ? '#F0EDE6' : '#1A1A1D' }}>
            <SportIcon sport={sport} size={26} color="currentColor"/>
          </div>
        )}
      </div>

      {/* Sport bead */}
      <div style={{
        position: 'absolute',
        left: cx - plateW/2 - 34,
        top: cy - 10,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#2A2A2E,#0E0E10)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: T.accent,
      }}>
        <SportIcon sport={sport} size={11} color="currentColor"/>
      </div>

      {!compact && (
        <>
          <div style={{ position: 'absolute', bottom: 12, left: 16 }}>
            <span className="strap-mono" style={{ color: T.fog2 }}>APERÇU LIVE</span>
          </div>
          <div style={{ position: 'absolute', bottom: 12, right: 16, display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#29C268', flexShrink: 0, animation: 'strap-pulse 1.6s ease-in-out infinite' }}/>
            <span className="strap-mono strap-live-label" style={{ color: T.fog2 }}>LIVE</span>
          </div>
        </>
      )}
    </div>
  )
}
