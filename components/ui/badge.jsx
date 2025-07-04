export function Badge({ children, variant = 'default', className = '', ...props }) {
  const style = {
    display: 'inline-block',
    padding: '0.2em 0.7em',
    borderRadius: '1em',
    background: variant === 'secondary' ? '#333' : '#00eaff',
    color: variant === 'secondary' ? '#fff' : '#181818',
    border: variant === 'outline' ? '1px solid #00eaff' : 'none',
    marginRight: '0.5em',
    fontSize: '0.85em',
  };
  return <span className={className} style={style} {...props}>{children}</span>;
}
