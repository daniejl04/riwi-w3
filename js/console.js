const renderizar = () =>{
    const text_add = document.getElementById("text_add");
    const editor = document.getElementById("editor_html");
    editor.srcdoc = text_add.value;
};


