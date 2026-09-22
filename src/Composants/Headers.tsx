// Définition du composant Header
export default function Header() {
  return (
    <header className="main-header" style={{
      padding: '20px',
      backgroundColor: '#031539',
      color: 'white',
      borderRadius: '8px',
      marginBottom: '20px',
      textAlign: 'center'
    }}>
      <h1>📝 My TaskFlow</h1>
      <p style={{ margin: '5px 0 0 0', opacity: 0.8, fontSize: '0.9rem' }}>
        Organisez votre journée efficacement
      </p>
    </header>
  );
}