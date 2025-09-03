const Loading = () => {
  return (
    <div className="loading-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh'
    }}>
      <div className="loading-spinner" style={{
        width: '40px',
        height: '40px',
        border: '4px solid hsl(var(--clr-white) / 0.1)',
        borderTop: '4px solid hsl(var(--clr-white))',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Loading