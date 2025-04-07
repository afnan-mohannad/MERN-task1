import axios from 'axios';

async function fetchPostsTitles() {
    try {
      const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.slice(0, 5).forEach(({title}, index) =>{
        console.log(`Post ${index + 1}: ${title}`)
      })
    } catch ({ message }) {
      console.error('Error fetching posts:', message);
    }
  }
  
  fetchPostsTitles();