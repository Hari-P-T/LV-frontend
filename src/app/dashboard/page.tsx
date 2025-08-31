// 'use client';

// import { useEffect, useState } from 'react';
// import { useUser } from '@auth0/nextjs-auth0/client';

// const WS_URL = 'ws://localhost:8000/ws';

// export default function Dashboard() {
//   const { user, error, isLoading } = useUser();
//   const [wsStatus, setWsStatus] = useState('disconnected');
//   const [message, setMessage] = useState('');
//   const [deviceId] = useState(() => crypto.randomUUID());

//   useEffect(() => {
//     if (!user) return;

//     const fetchToken = async () => {
//       const res = await fetch('/api/auth/token');
//       const data = await res.json();
//       return data.accessToken;
//     };

//     fetchToken().then(token => {
//       const ws = new WebSocket(`${WS_URL}?token=${token}&device_id=${deviceId}`);

//       ws.onopen = () => setWsStatus('connected');
//       ws.onmessage = e => {
//         const data = JSON.parse(e.data);
//         if (data.type === 'limit_reached') {
//           setMessage('Device limit reached. Close other sessions or force logout.');
//         } else if (data.type === 'connected') {
//           setMessage('Connected successfully!');
//         }
//       };
//       ws.onclose = () => setWsStatus('disconnected');
//     });
//   }, [user, deviceId]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!user) return <a href="/api/auth/login" className="text-blue-600 underline">Login</a>;

//   return (
//     <div className="p-8 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
//       <p>Phone: {user['phone_number'] || 'N/A'}</p>
//       <p>Status: {wsStatus}</p>
//       <p>{message}</p>
//       <button
//         className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//         onClick={() => (window.location.href = '/api/auth/logout')}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return <h1>Welcome {user?.name || 'Guest'}</h1>;
}
