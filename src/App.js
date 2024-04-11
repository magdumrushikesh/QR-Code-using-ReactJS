import './App.css';


function App() {

  
  function generateQR() {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

   
      qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
      imgBox.classList.add("show-img");

  }

  return (
    <>
      <div className="container">
        <p>Enter your text or URL</p>
        <input type="text" placeholder="Text or URL" id="qrText" onChange={generateQR }   />
        {/* <input type="text" placeholder="Text or URL" id="qrText1"  onChange={(e) => console.log(e.target.value)}  /> */}
        


        <div id="imgBox">
          <img src="" id="qrImage" alt="" />
        </div>
       

      </div>
    </>
  );
}

export default App;
