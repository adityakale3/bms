function displayComment(){
    var displayComment = document.getElementById('comments');
    var content = `
    <div class="card">
        <div class="container">
            <center>
                <b>Task</b>
                <p>Comment</p>
            </center>
        </div>
    </div>
    `;

    displayComment.innerHTML = content;
}

