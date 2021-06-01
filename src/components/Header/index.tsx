export const Header = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: 20,
      alignItems: 'center',
      background: '#1946',
      height: 50,
      width: '100%',
      fontWeight: 900,
      fontSize: 'larger'
    }}
  >
    {children}
  </div>
);
