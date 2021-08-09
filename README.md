# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot
![Screenshot (3)](https://user-images.githubusercontent.com/44214523/128651605-62d90a32-e6f8-4ceb-a709-52a36491d2af.png)

### Links

- Solution URL: [Code](https://github.com/Johnpaul-Attamah/countries-api-frontendmentors/)
- Live Site URL: [Go Live](https://peaceful-kalam-9b16eb.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

# CSS
- Theming and dark mode switch with styled components
- Styling SVGs (scaling using viewBox)
- using sprite images from SVGs 
- responsive design practices
- passing styles through props
- extending props as css variables
- Theming with Styled components
- etc.


```css
.proud-of-this-css {
    ...

  & form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 1000px) {
            justify-content: flex-start;
        }
    }

    & label {
        display: block;
        position: absolute;
        top: 32%;
        left: 13%;

        @media screen and (min-width: 500px) {
            left: 8%;
        }

    ...

```
## Javascript
- setting up theme objects for styled components
- implementing night mode switch with hooks
- lifting up state
- Get data from APi using react hooks
- Filter API data
- Search Data
- navigate pages using react router
- Add pagination to Api with no page query from backend
- filtering data
- separation of concerns
- etc.

```js
...
let uri = `${BASE_URI}/alpha?codes=${match.params.name}`;

    useEffect(() => {

        const handleCountryDetails = async() => {
            try {
              const { data } = await axios.get(uri);
              if(data){
                setCountryDetails(data)

                let borders = data[0].borders;
                
                let countryNames = [];
                for await (let country of borders) {
                    let uri = `${BASE_URI}/alpha?codes=${country}`;
                    const {data}  = await axios.get(uri);

                    if(data) {
                        countryNames.push(data[0].name);
                    }
    ...

    ...
    
       if(desktopSize.matches) {
      setItemsPerPage(16)
      setPageNumberLimit(10);
      setMaxPageNumberLimit(10);
    }

    window.addEventListener('resize', () => {
      window.location.reload();
    })

    getAllCountries();
  },[setLoading, setError, error]);

  const getCountriesByRegion = async(region) => {

    setPageDisplay(true);
    setRegion(region);
    setCurrentPage(1);
    setMinPageNumberLimit(0);
    setMaxPageNumberLimit(3);

    const tabletSize = window.matchMedia('(min-width: 500px)');
    if(tabletSize.matches) {
      setPageNumberLimit(5);
      setMaxPageNumberLimit(5);
    }
    
    let uri = `${BASE_URI}/region/${region}`
        ...
```

### Useful resources

- [CSS in Js with styled components](https://styled-components.com/docs/advanced) - Styled components makes it easy to work with css in React. Everything flows like normal javascript

- [React js with hooks and ref](https://reactjs.org/) - React makes the job simpler, you can easily put up great work in few lines.



## Author

- Website - [Johnpaul Attamah](https://github.com/Johnpaul-Attamah)
- Frontend Mentor - [Johnpaul-Attamah](https://www.frontendmentor.io/profile/Johnpaul-Attamah)
- LinkedIn - [Johnpaul](https://www.linkedin.com/in/johnpaul-attamah-4b265983/)

