export const Header = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: 20,
      alignItems: 'center',
      height: 50,
      width: '100%',
      fontWeight: 900,
      fontSize: 'larger',
      backgroundImage: 'radial-gradient(#fff 5.66%, grey 94.35%)'
    }}
  >
    {children}
  </div>
);
