
function fetchdata() {
    return new Promise((resolve, reject) => {
        const elem = true;
        if (elem) {
          resolve('Data fetched successfully');
        } else {
          reject(new Error('Failed to fetch data'));
        }
    });
  }
  
 
  async function fetchdataexample() {
    try {
      const result = await fetchdata();
      console.log('Result:', result);
    } catch (error) {
      console.error(' error message :', error);
    }
  }
  
 
  fetchdataexample();
  