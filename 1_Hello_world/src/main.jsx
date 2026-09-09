import {createRoot} from 'react-dom/client'

const myelement=(
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
    <tr>
      <td>Cyndy</td>
    </tr>
  </table>
)

//render
createRoot(document.getElementById('root')).render(
  myelement
)