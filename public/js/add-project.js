async function newProjectHandler(event) {
    event.preventDefault();

    const issue = document.querySelector('#project-issue').value;
    const instructions = document.querySelector('#project-instructions').value;
    //const imgURL = document.querySelector('#').value;
    const imgURL = "";
    const difficulty = document.querySelector('#diff-radio-btn input:radio:checked').value;
    const category = document.querySelector('#category-radio-btn input:radio:checked').value;

    const response = await fetch(`/api/dish`, {
        method: 'POST',
        body: JSON.stringify({
            issue,
            instructions,
            imgURL,
            difficulty,
            category,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        //maybe update a span with "Your tip has been added successfully"
        //document.location.replace('/');
    } else {
        alert('Failed to add project');
    }
}

document
    .querySelector('#submit-btn')
    .addEventListener('submit', newProjectHandler);