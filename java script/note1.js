const addbtn = document.querySelector(".btn");
const main = document.querySelector("#main");


const saveNotes = () =>{
 const notes = document.querySelectorAll(".note textarea");
 console.log(notes);
 const data = [];
 notes.forEach(
    (note) =>{
        data.push(note.value)
    }
 )
   console.log(data);
   if(data.length === 0){
    localStorage.removeItem("notes")
   }
   else{
    localStorage.setItem("notes", JSON.stringify(data))
   }
   
}
addbtn.addEventListener("click", function(){
    addNote();
}
);


const addNote = ( text ="") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="trash fas fa-trash"></i>
    <i class="save fas fa-save"></i>

     </div>
     <textarea>${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener("click", () =>{
        note.remove();
        saveNotes();
    })

    note.querySelector(".save").addEventListener("click", () => {
        saveNotes();
    })

    note.querySelector('textarea').addEventListener("keyup", () =>{
        saveNotes();
    })
     main.appendChild(note);
     saveNotes();
};

(
    function () {
        const  lsnotes = JSON.parse(localStorage.getItem("notes")) ;
     //   console.log(lsnotes);
     if(lsnotes === null){
        addNote();
     }
     else{
        lsnotes.forEach(
            (lsnote) =>{
                addNote(lsnote);
            }
        )
     }
       
        // if(lsnotes.length === 0){
        //     localStorage.removeItem('notes')
        // }
        // else{
        //     addNote();
        // }

    }()
)






















