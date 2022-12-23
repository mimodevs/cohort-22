const APIURL = 'https://api.github.com/users/';

const formContainer = document.getElementById ('form-container');
const profileContainer = document.getElementById('profile-container');

const form = document.getElementById('form');

const person = {
	name: "",
	email: "",
  github: "",
	avatar_url: ""
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  person.name = e.target.fullname.value;
  person.email = e.target.email.value;
  person.github = e.target.github.value;
  registered = true;
	formValidate(person);
});

async function formValidate (person) {
  if (person.name && person.email && person.github ) {

    console.log ('Congratulations on signing up!');
    const username = person.github;

		const resp = await fetch (APIURL + username);
		const respData = await resp.json ();

    console.log (respData);

    person.avatar_url	= respData.avatar_url;

		registered = true;
		renderProfile(registered);
	} else {
		console.log ('All form fields must be filled out');
	}
}

function renderProfile(registeredBoolean) {
  if (registeredBoolean) {
    formContainer.setAttribute ('id', 'none');
    profileContainer.style.visibility = 'visible';
    const info = document.createElement("div");
		info.innerHTML = `
			<p>${person.name}</p>
			<p>${person.email}</p>		
      <p>${person.github}</p>
			<p><img src=${person.avatar_url} />
		`;
    profileContainer.appendChild(info);
  }
}