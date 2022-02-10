console.log('welcome to the notes app');
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html+=
        `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
                <div class="card" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body">
                      <h5 class="card-title">Note ${index + 1}</h5>
                      <p class="card-text">${element}</p>
                      <button href="#" class="btn btn-primary">delete Note</button>
                    </div>
                  </div>

              
              </div>`;
    });
    let notesElm = document.getElementById("notes");
}