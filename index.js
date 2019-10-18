let request = new XMLHttpRequest();

request.open('GET', 'https://github.com/Jahazielvaz/JSON-data/blob/master/planets-file1.json')

request.onload = () => {
  console.log(JSON.parse(request.responseText))
}

request.send()
