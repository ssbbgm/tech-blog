async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value;
    const body = document.querySelector('#blog-content').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#blog-submit').addEventListener('click', newFormHandler);