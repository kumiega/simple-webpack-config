import { Header } from './app/header'
import './styles/scss/main.scss'

let header = new Header();
let firstHeading = header.getFirstHeading();

console.log(firstHeading);