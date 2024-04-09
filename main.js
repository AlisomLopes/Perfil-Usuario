function editingProfile()
{   
    if(!document.getElementById('input-name-profile').value || !document.getElementById('input-biography').value)
    {
        alert('To edit your profile, you must fill in all fields!');
        document.getElementById('save-button').addEventListener('submit', function(event)
        {   
            event.preventDefault();
        })
    }
    else
    {
        document.getElementById('name-profile').innerText = document.getElementById('input-name-profile').value;

        document.getElementById('biography-profile').innerText = document.getElementById('input-biography').value;
    }
}