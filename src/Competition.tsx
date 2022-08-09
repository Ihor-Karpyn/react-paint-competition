import { App } from './App';

const PLAYER = 'Player name';

export function Competition() {
  return (
    <div>
      <App />
      <div
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          padding: '20px 60px',
          borderRadius: '20px',
          backgroundColor: 'rgba(106, 182, 110, 0.8)',
          color: 'white',
          fontSize: '40px',
          textTransform: 'uppercase',
        }}
      >
        {PLAYER}
      </div>
    </div>
  );
}
