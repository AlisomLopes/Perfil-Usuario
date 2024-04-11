function showDisplay()
{
    document.getElementById('button-edit').addEventListener('click', function()
    {
        this.style.display = "none";
        document.getElementById('form').style.display = 'flex';
        document.getElementById('name-bio-links').style.display = 'none';
    })
}

function hiddenDisplay()
{
    document.getElementById('form').style.display = "none";
    document.getElementById('button-edit').style.display = 'flex';
    document.getElementById('name-bio-links').style.display = 'flex';
}

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
        let facebook = document.getElementById('input-facebook').value;
        let instagram = document.getElementById('input-instagram').value;
        let twitter_x = document.getElementById('input-twitter/x').value;

        document.getElementById('name-profile').innerText = document.getElementById('input-name-profile').value;

        document.getElementById('biography-profile').innerText = document.getElementById('input-biography').value;

        document.getElementById('facebook').innerHTML = `<a href="${facebook}" class="links" target="_blank" id="facebook">facebook</a>`
        document.getElementById('instagram').innerHTML = `<a href="${instagram}" class="links" target="_blank" id="instagram">instagram</a>`
        document.getElementById('twitter/x').innerHTML = `<a href="${twitter_x}" class="links" target="_blank" id="twitter_x">twitter_x</a>`
        
        hiddenDisplay()
    }
}