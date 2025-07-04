export function Button({ children, ...props }) {
  return (
    <button style={{ padding: '0.5em 1em', borderRadius: '4px', border: '1px solid #ccc', background: '#222', color: '#fff', cursor: 'pointer' }} {...props}>
      {children}
    </button>
  );
}
