import { ImageResponse } from 'next/og'

// Square branded PNG used as the Apple touch icon AND the Organization schema logo.
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          color: 'white',
          fontSize: 120,
          fontWeight: 800,
        }}
      >
        ✦
      </div>
    ),
    { ...size },
  )
}
