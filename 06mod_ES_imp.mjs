/*
if You want to import import a ES6 module inside NODE then we must Include 
"type":"module" inside our Package.json else ERROR :=> cant use import outside a
module error will be thrown.
But imports using require will throw an error after that so delete type:module 
when you are running require imports 
*/

// type imp & then press Enter
import { simp } from "./mod_exp.mjs";
import {simp as simple} from './mod_exp.mjs';
import * as a from "./mod_exp.mjs";

simp()
simple()
console.log(a)
a.simp()