import Editor from "@monaco-editor/react";

function CodeEditor({
language,
code,
setCode
}) {

return (

<div
style={{
border:"1px solid #2a2a2a",
borderRadius:"12px",
overflow:"hidden",
boxShadow:
"0 0 15px rgba(0,0,0,0.3)"
}}
>

<Editor
height="600px"
theme="vs-dark"
language={language}
value={code}
onChange={(value)=>
setCode(
value
)
}
options={{
fontSize:16,
minimap:{
enabled:false
},
scrollBeyondLastLine:false,
roundedSelection:true,
padding:{
top:20
},
automaticLayout:true
}}
/>

</div>

);

}

export default CodeEditor;