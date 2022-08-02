
async function discoverNames() {
  const words = [];
  
  const result = await fetch('https://random-name-challenge.weblab.technology',
    {
      method: 'POST'
    }
  )

  const data = await result.json();

  if (data.error) {
    discoverNames()
  } else {
    words.push(data.name)
  }

  return words; 
}

discoverNames().then((words) => console.log('words ===> ', words));