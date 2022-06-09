window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/locations/';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Response not ok');
        } else {
            const data = await response.json();
            const locationTag = document.getElementById('location');

            for (let loct of data.locations) {
                const secondOption = document.createElement('option');
                secondOption.value = loct.id;
                secondOption.innerHTML = loct.name;
                locationTag.appendChild(secondOption)

            }
            const formTag = document.getElementById('create-conference-form')
            formTag.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData));

                const locationUrl = 'http://localhost:8000/api/conferences/';
                const fetchConfig = {
                  method: "post",
                  body: json,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                };
                
                const response = await fetch(locationUrl, fetchConfig);
                
                if (response.ok) {
                  formTag.reset();
                  const newLocation = await response.json(); }
})}
    } catch (e) {
        console.error('error', e);
    }
});





