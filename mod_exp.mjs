export function simp()
{
    console.log("Hii I am a ES6 Module");
}

export default function func()
{
    console.log("Hii I am Default Export Module");
}

/*
    defualt tag is used so that whenver a function thats requested to be imported in a 
    file does not exist in this mod_exp.mjs then this default Function will be exported
    by Default.

    say if a file has code like this 
    import {hrithik} from ".mod_exp.mjs" then this default module will be exported to it
*/