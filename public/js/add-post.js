async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value;
    const content = document.querySelector('#blog-content').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
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
  
document.querySelector('#add-blog-form').addEventListener('blog-submit', newFormHandler);