import './skills';
import { skills } from './skills';
export const projects = [
    {title:"Accountant Web",image:"contable.jpg",video:false,type:'web',created:'April/2023',
    descripton:"website for accounting procedures and find measurement of figures, you can calculate your El Salvador taxes here",
    madeWith:[skills[0].image,skills[1].image,skills[2].image,],
    download:false,github:'https://github.com/Eduardosent/contable',link:'https://contables-sv.netlify.app/',typedownload:false},
    {title:"Auto Sales",image:"cars.jpg",video:false,type:'web',created:'May/2023',
    descripton:"design of a website to sell luxury cars",
    madeWith:[skills[0].image,skills[1].image,skills[2].image,'icons8-sass.svg','file_type_gulp_icon_130557.svg'],
    download:false,github:'https://github.com/Eduardosent/empresa_de_autos',link:'https://autoventas.netlify.app/',typedownload:false},
    {title:"React finder api Rick and Morty",image:"rickymorty.jpg",video:false,type:'web',created:'Jun/2023',
    descripton:"React Finder for Rick and Morty Characters API",
    madeWith:['icons8-reaccionar-nativo.svg'],
    download:false,github:'https://github.com/Eduardosent/buscador-RickYMorty',link:'https://react-rickymorty.netlify.app/',typedownload:false},
    {title:"Simple Shopping Cart",image:"carrito.jpg",video:false,type:'web',created:'Sept/2023',
    descripton:"nice basic shopping cart",
    madeWith:['icons8-reaccionar-nativo.svg'],
    download:false,github:'https://github.com/Eduardosent/Carrito-De-Compras',link:'https://shop-cart-v1.netlify.app/',typedownload:false},
    {title:"Crypto Prices",image:"cripto.jpg",video:false,type:'web',created:'Sept/2023',
    descripton:"Check the price of one of the crypto options",
    madeWith:['icons8-reaccionar-nativo.svg'],
    download:false,github:'https://github.com/Eduardosent/Cripto-precios',link:'https://cripto-precios.netlify.app/',typedownload:false},
    {title:"NavBar with Context usage",image:"contexto.jpg",video:false,type:'web',created:'Oct/2023',
    descripton:"Practice using useContext in react to create an application, try changing the state of the theme",
    madeWith:['icons8-reaccionar-nativo.svg'],
    download:false,github:'https://github.com/Eduardosent/useContex-theme',link:'https://context-project-ed.netlify.app/',typedownload:false},
    {title:"Pomodoro apk",image:"pomodoro1.jpg",video:false,type:'mobile',created:'Nov/2023',
    descripton:"Install the Pomodoro application on your cell phone to calculate the time in which you complete a task",
    madeWith:['react-native-1.svg'],
    download:'https://drive.google.com/file/d/1Asc3rssHZHqbdWWcRgf-9NikKbZvKp1H/view',github:'https://github.com/Eduardosent/pomodoro',link:false,typedownload:'.apk'},
    {title:"Chat-app apk",image:false,video:'chatapp.webm',type:'mobile',created:'Nov/2023',
    descripton:"application with login with firebase and send messages within the app with other users who have written",
    madeWith:['react-native-1.svg','firebase-icon.svg'],
    download:false,github:'https://github.com/Eduardosent/pomodoro',link:false,typedownload:false},
    {title:"crud-firebase apk",image:false,video:'crudfirebase.webm',type:'mobile',created:'Nov/2023',
    descripton:"react native CRUD application using firebase to store products, updating with the purchase and deleting it, in the image are used stikers",
    madeWith:['react-native-1.svg','firebase-icon.svg'],
    download:false,github:'https://github.com/Eduardosent/pomodoro',link:false,typedownload:false},
    {title:"Flutter Basic Concepts",image:'flutter-concepts.jpg',video:false,type:'multiplatform',created:'Dic/2023',
    descripton:"the project is deployed with firebase, contains basic concepts of flutter as design,Shared Preferences(local storage) the state, navigation, classes etc.(the login is only stetic), you can install the app in windows downloading it and running login.exe",
    madeWith:['icons8-flutter.svg','firebase-icon.svg'],
    download:'https://drive.google.com/drive/folders/18MbUoULj6aDpby_QF7ZL6g2Qlg65nUsE',github:'https://github.com/Eduardosent/flutter-basic-concepts',link:'https://basic-concepts-flutter.web.app/',typedownload:'.exe'},
    {title:"Angular Concepts",image:'angular.png',video:false,type:'web',created:'Dic/2023',
    descripton:"this project implements general concepts of angular like props, navigation, forms, ngcomponents and Requests HTTP with api etc",
    madeWith:['angular-icon-1.svg','icons8-oreja.svg'],
    download:false,github:'https://github.com/Eduardosent/Angular-concepts',link:'https://ed-angular-concepts.netlify.app/',typedownload:'.exe'},
    {title:"Time for new Year",image:"newYear.png",video:false,type:'web',created:'Dic/2023',
    descripton:"this website tell you how long time left for new year, and do a surprise on Jan 1",
    madeWith:['icons8-reaccionar-nativo.svg'],
    download:false,github:'https://github.com/Eduardosent/time-to-new-year',link:'https://time-for-new-year.netlify.app/',typedownload:false},
    {title:"API REST fake users",image:"fakeusers.png",video:false,type:'API',created:'Jan/2024',
    descripton:"API REST made with Node.js, Express, using MongoDB Atlas, and deployed with AWS, soon a page with the endpoints, ",
    madeWith:['mongodb-icon-1.svg','nodejs.svg','express.svg','aws.svg'],
    download:false,github:'https://github.com/Eduardosent/api',link:'http://ec2-18-222-121-21.us-east-2.compute.amazonaws.com/user',typedownload:false},
    {title:"Ethereum wallet Dapp",image:"dapp.png",video:false,type:'Web3',created:'Jan/2024',
    descripton:"Create your ETH wallet here",
    madeWith:['icons8-reaccionar-nativo.svg','solidity.svg','web3js.svg'],
    download:false,github:'https://github.com/Eduardosent/dapp',link:'https://createwalletdapp.netlify.app/',typedownload:false},
    {title:"Fundater adminitration",image:"fundater.png",video:false,type:'web',created:'Feb/2024',
    descripton:"Crud administration for fundater with Log in, user:correo@prueba.com, password:Prueba12",
    madeWith:['preact.svg','tailwind.svg'],
    download:false,github:'https://github.com/Eduardosent/dapp',link:'https://fundater-landing.vercel.app/admin/login',typedownload:false},
    {title:"LearnEdu React",image:"LearnEduReact.png",video:false,type:'web',created:'Feb/2024',
    descripton:"Learn React on this page with new classes coming soon",
    madeWith:['icons8-reaccionar-nativo.svg','tailwind.svg'],
    download:false,github:'https://github.com/Eduardosent/dapp',link:'https://learnedu-react.vercel.app/',typedownload:false},
    {title:"Red (demo)",image:"red.png",video:false,type:'web',created:'Apr/2024',
    descripton:"Social Network with most of the functions that a social network has (in development)",
    madeWith:['preact.svg','tailwind.svg'],
    download:false,github:'https://github.com/Eduardosent/dapp',link:'https://red-inky.vercel.app/',typedownload:false},
];
//multi platform