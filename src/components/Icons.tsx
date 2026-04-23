'use client'

export const SportIcon = ({ sport, size = 20, color = 'currentColor' }: { sport: string, size?: number, color?: string }) => {
  const s = size
  const props = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const icons: Record<string, JSX.Element> = {
    football: <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 3 L14 8 L12 12 L10 8 Z"/><path d="M3 12 L8 14 L12 12 L8 10 Z"/><path d="M21 12 L16 14 L12 12 L16 10 Z"/><path d="M12 21 L14 16 L12 12 L10 16 Z"/></svg>,
    basketball: <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12 H21"/><path d="M12 3 V21"/><path d="M5 5 Q12 12 5 19"/><path d="M19 5 Q12 12 19 19"/></svg>,
    tennis: <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3.5 8 Q10 14 3.5 19"/><path d="M20.5 5 Q14 10 20.5 16"/></svg>,
    running: <svg {...props}><circle cx="14" cy="5" r="2"/><path d="M7 22 L10 15 L8 12 L12 9 L15 11 L18 15"/><path d="M10 15 L13 15"/><path d="M4 11 L8 12"/></svg>,
    muscu: <svg {...props}><rect x="2" y="10" width="2" height="4" rx=".5"/><rect x="5" y="8" width="2" height="8" rx=".5"/><rect x="8" y="11" width="8" height="2" rx=".5"/><rect x="17" y="8" width="2" height="8" rx=".5"/><rect x="20" y="10" width="2" height="4" rx=".5"/></svg>,
    cyclisme: <svg {...props}><circle cx="5.5" cy="17.5" r="4"/><circle cx="18.5" cy="17.5" r="4"/><path d="M5.5 17.5 L10 8 L14 14 L18.5 17.5"/><path d="M10 8 L14 8"/><circle cx="14" cy="6" r="1"/></svg>,
    boxe: <svg {...props}><path d="M6 7 H14 L17 10 V17 H6 Z"/><path d="M6 12 H17"/><path d="M10 7 V4 H13 V7"/></svg>,
    ski: <svg {...props}><path d="M5 21 L15 5"/><path d="M9 21 L19 5"/><circle cx="7" cy="4" r="1"/><path d="M7 5 L8 10"/><path d="M4 13 L8 10"/></svg>,
    padel: <svg {...props}><ellipse cx="12" cy="9" rx="7" ry="5"/><path d="M12 14 L12 21"/><path d="M9 21 L15 21"/><circle cx="9" cy="8" r=".6" fill={color}/><circle cx="12" cy="7" r=".6" fill={color}/><circle cx="15" cy="9" r=".6" fill={color}/></svg>,
    golf: <svg {...props}><path d="M12 3 V17"/><path d="M12 5 L18 7 L12 9"/><path d="M6 21 Q12 18 18 21"/></svg>,
    natation: <svg {...props}><path d="M2 17 Q5 15 8 17 T14 17 T20 17 T22 17"/><path d="M2 13 Q5 11 8 13 T14 13 T20 13 T22 13"/><circle cx="16" cy="7" r="1.6"/><path d="M10 10 L14 8 L18 10"/></svg>,
  }
  return icons[sport] || icons.football
}

export const IconChevron = ({ dir = 'right', size = 16 }: { dir?: string, size?: number }) => {
  const r = { right: 0, down: 90, left: 180, up: 270 }[dir] || 0
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${r}deg)` }}><path d="M9 6 L15 12 L9 18"/></svg>
}

export const IconStar = ({ size = 14, filled = true }: { size?: number, filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5"><path d="M12 3 L14.5 9 L21 9.5 L16 14 L17.5 20.5 L12 17 L6.5 20.5 L8 14 L3 9.5 L9.5 9 Z"/></svg>
)

export const IconCart = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4 H6 L8 16 H19 L21 7 H7"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
)

export const IconHeart = ({ size = 18, filled = false }: { size?: number, filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20 S3 14 3 8.5 A4.5 4.5 0 0 1 12 6 A4.5 4.5 0 0 1 21 8.5 C21 14 12 20 12 20 Z"/></svg>
)

export const IconSearch = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20 L16 16"/></svg>
)

export const IconMenu = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 7 H21"/><path d="M3 17 H21"/></svg>
)

export const IconCheck = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12 L10 18 L20 6"/></svg>
)

export const IconArrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12 H19"/><path d="M13 6 L19 12 L13 18"/></svg>
)

export const IconClose = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6 L18 18"/><path d="M18 6 L6 18"/></svg>
)

export const IconPlus = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5 V19"/><path d="M5 12 H19"/></svg>
)

export const IconMinus = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12 H19"/></svg>
)
