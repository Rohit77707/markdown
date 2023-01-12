import { useState } from "react";
import { Remarkable } from "remarkable";

const md = new Remarkable();

function App() {
  const [text, setText] = useState("");
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
      <main className="p-5 md:max-w-4xl md:mx-auto">
        <h1 className="text-gray-900 text-4xl text-center font-bold">
          markdown editor
        </h1>

        <article>
          <label htmlFor="markdown" className="mt-5 mb-3 block"> 
        type in some markdown</label>
          <textarea
            name="textarea"
            id="markdown"
            cols="30"
            rows="10"
            required
            placeholder="type in some markdown"
            className="bg-white p-5 rounded shadow w-full"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
          ></textarea>
          <input type="file" onChange={handleChange} />
          <h3>output</h3>
          <div dangerouslySetInnerHTML={{__html:md.render(text)}}>
          
          </div>
          <img src={file} />
        </article>
      </main>
    </>
  );
}

export default App;