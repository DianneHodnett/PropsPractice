var markupExample = React.createElement('div', {},
  React.createElement('h1', {}, 'My Favorite Cites to Visit'),
  React.createElement('ul', {},
    React.createElement('li', {}, 'Tel Aviv'),
    React.createElement('li', {}, 'Reykjavik'),
    React.createElement('li', {}, 'Amsterdam'),
    React.createElement('li', {}, 'Rome'),
    React.createElement('li', {}, 'Hong Kong')
  )
)

ReactDOM.render(markupExample, document.getElementById('root'))