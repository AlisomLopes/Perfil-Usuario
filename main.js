function showDisplay()
{
    document.getElementById('button-edit').addEventListener('click', function()
    {
        this.style.display = "none";
        document.getElementById('form').style.display = 'flex';
    })
}

function hiddenDisplay(){

    document.getElementById('form').style.display = "none";
    document.getElementById('button-edit').style.display = 'flex';

}

function editingProfile() //função do botão submit
{   
    if(!document.getElementById('input-name-profile').value || !document.getElementById('input-biography').value) //verificação se os input's profile name e biography estão vazios
    {//se estiverem(verdadeiro), será exibido um alerta e o botão submite não irá funcionar
        alert('To edit your profile, you must fill in all fields!');
        document.getElementById('save-button').addEventListener('submit', function(event)
        {   
            event.preventDefault();
        })
    }
    else
    { //senão, tudo ocorrerá normalmente
        let facebook = document.getElementById('input-facebook').value;//variavel recebe o valor do input url facebook
        let instagram = document.getElementById('input-instagram').value;//variavel recebe o valor do input url instagram
        let twitter_x = document.getElementById('input-twitter/x').value;//variavel recebe o valor do input url twitter

        document.getElementById('name-profile').innerText = document.getElementById('input-name-profile').value;//o valor do <p> com 'id name-profile' será substituido pelo valor que o usuário inseriu no input-name-profile

        document.getElementById('biography-profile').innerText = document.getElementById('input-biography').value;//o valor do <p> com 'id biography-profile' será substituido pelo valor que o usuário inseriu no input-biography

        document.getElementById('facebook').innerHTML = `<a href="${facebook}" class="links" target="_blank" id="facebook">facebook</a>`
        document.getElementById('instagram').innerHTML = `<a href="${instagram}" class="links" target="_blank" id="instagram">instagram</a>`
        document.getElementById('twitter/x').innerHTML = `<a href="${twitter_x}" class="links" target="_blank" id="twitter_x">twitter_x</a>`//os valores do <a href> serão substituidos pelo valor das variaveis locais no começo do bloco, que são, por sua vez, os valores inseridos pelo usuário nas 'inputs type "url"'.
        hiddenDisplay()
    }
}