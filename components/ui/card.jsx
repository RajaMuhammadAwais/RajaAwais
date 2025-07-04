export function Card({ children, className = '', ...props }) {
  return <div className={`card ${className}`} style={{ border: '1px solid #333', borderRadius: '8px', padding: '1em', background: '#181818', marginBottom: '1em' }} {...props}>{children}</div>;
}

export function CardHeader({ children, ...props }) {
  return <div style={{ borderBottom: '1px solid #333', marginBottom: '0.5em', paddingBottom: '0.5em' }} {...props}>{children}</div>;
}

export function CardTitle({ children, ...props }) {
  return <h3 style={{ margin: 0, color: '#00eaff' }} {...props}>{children}</h3>;
}

export function CardDescription({ children, ...props }) {
  return <p style={{ margin: 0, color: '#aaa' }} {...props}>{children}</p>;
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
