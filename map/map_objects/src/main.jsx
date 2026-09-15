import {createRoot} from 'react-dom/client'

const maliciousIPs=[
  {id:1, ip_address: '192.168.1.122', action:'blocked'},
  {id:2, ip_address: '192.168.1.102', action:'blocked'},
  {id:3, ip_address: '192.168.1.99', action:'blocked'}
];

function BlockedList(){
  return (
    <ul>
      {maliciousIPs.map(ip=>
        <li key={ip.id}>
          {ip.ip_address} threat actor. Action taken: {ip.action}
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <BlockedList/>
)