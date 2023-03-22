let AddBtn = document.querySelector(".btn");
let main = document.querySelector("#main");
AddBtn.addEventListener("click", function () {
 AddNote();
})
let AddNote = () => {                                             //text = ""
    let note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    
    <div class="tool">
        <i class=" trash fas fa-trash"></i>
        <i class=" save fas fa-save"></i>

    </div>
      <textarea>${text}</textarea>
   
  `;
  note.querySelector(".trash").addEventListener("click", () =>{
    note.remove();
    saveNotes();
  });
  note.querySelector(".save").addEventListener("click", () =>{
    saveNotes(); 
  })
  main.appendChild(note);
  saveNotes();
};

let saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    console.log(data);
    if(data.length === 0){
      localStorage.removeItem("notes")
    }
    else{
       localStorage.setItem("notes", JSON.stringify(data));
    }
    
}
(
    function(){
         const  Lsnotes = JSON.parse(localStorage.getItem("notes"));
         console.log(Lsnotes);
      //  Lsnotes.forEach(
      //   (Lsnotes) =>{
      //      AddNote();
      //   }
      //    )
        //  if(Lsnotes.length ===0){
        //   localStorage.removeItem("notes")
        //  }
        //  else{
        //   AddNote();
        //  }
    }()
)





