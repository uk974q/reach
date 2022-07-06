
import './App.css';
import React from 'react';
import VideoResources from './Resources/VideoResources';

function App() {
  const [deviceIds,setDeviceIds] = React.useState([])
  const [selectedDeviceId,setSelectedDeviceId] = React.useState('')
  let [loadSpinner, setLoadSpinner] = React.useState(false)
  let userId = "100"
  let orgId="Lumi"

  React.useEffect(el => {
    fetch(`https://mockapi.lumi.systems/getdevices?userId=${userId}&orgId=${orgId}`).then(res => res.json())
    .then(response => {
      console.log("Respnse App",response)
      setDeviceIds(response.output.map(el => (
        <option value={el}>{el}</option>
      ))
      ) 
    })
  },[deviceIds.length])

  React.useEffect(()=>{
    document.querySelector('.device-ids')?.addEventListener("change",function(e){
      setSelectedDeviceId(e.target.value) 
      setLoadSpinner(true)
      document.querySelector(".error").classList.add("d-none")
    })
  },[selectedDeviceId])



  return (
    <div className="App">
      <select name="device-ids" id="deviceIds" className='device-ids'>
        <option value="None">Please select</option>
        {deviceIds}
      </select>
      {selectedDeviceId && <VideoResources deviceId={selectedDeviceId} loadSpinner={loadSpinner}/>}
      {!selectedDeviceId && <h3 className='info'>Data loading only for LabEye-dVr</h3>}
      <h1 className='error d-none'>API error</h1>
    </div>
  );
}

export default App;
