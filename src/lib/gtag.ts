export const GA_MEASUREMENT_ID = 'G-67G5LYG3KQ'

// https://developers.google.com/analytics/devguides/collection/ga4
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: url })
}

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const event = ({ action, ...params }: GTagEvent) => {
  window.gtag('event', action, params)
}
