const button = document.getElementById("searchBtn");
const profileDiv = document.getElementById("profile");

button.addEventListener('click' , async()=>{
    const username = document.getElementById("username").value;

    if(username==""){
        alert("Please enter a username");
        return ;
    }

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok){
            throw new Error("User not found");
        }
        const data = await response.json();

        profileDiv.innerHTML = `
        <img src = "${data.avatar_url}"/>
        <h2>${data.login}</h2>
        <p>${data.bio || "No Bio Available"}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public Repos: ${data.public_repos}</p>
        `;

    }
    catch(error){
        profileDiv.innerHTML = `<p style="color : red;">${error.message}</p>`;
    }
});
