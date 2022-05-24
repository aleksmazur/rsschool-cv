# Aleksandra Mazur

## Contacts:
**Address:** Belarus, Minsk, Kalinovskogo st.  
**Phone:** +375 29 5863523  
**E-mail:** [markovasasha94@gmail.com](markovasasha94@gmail.com)  
**GitHub:** [aleksmazur](https://github.com/aleksmazur)  
**LinkedIn:** [aleksandramazurfrontend](https://www.linkedin.com/in/aleksandramazurfrontend/)

## Summary
**Junior Web Developer** search for a position where I can enhance my skillset in web technologies to develop and implement solutions to meet business needs.  

## Professional Skills
* HTML5, CSS3, JavaScript 
* Jquery, React, Redux 
* Git, GitHub, Sass/Scss, Gulp, BEM, JSON, AJAX, npm, Webpack, Babel, Figma, Avocode

## Code Examples
```
function calc() {
    //calc
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '...';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio); 
        }
    }
}
```
