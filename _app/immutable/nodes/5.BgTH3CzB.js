import{H as e,V as t,g as n,h as r,j as i,k as a,p as o}from"../chunks/DltmSIjW.js";import"../chunks/xihTtKlq.js";import"../chunks/BVhQc0cT.js";import{t as s}from"../chunks/Dkq1emlV.js";var c=r(`<section><h1>Tetris in Desmos</h1> <p> <a href="https://help.desmos.com/hc/en-us/articles/4407725009165-Actions">Desmos actions</a>, which are a way to update variables automatically. After I'd learnt
        some more desmos tricks, I made another one. So I have two versions, the
        first of which is still slighly more performant due to fewer features, but
        the second one is still much prettier and better in general. To use, activate
        the ticker (the metronome icon in the top-left of the expression bar), and
        press the buttons to control the piece.</p> <p>Another interesting fact: All Desmos graphs have a link that looks like <code>desmos.com/[calculatorType]/[hash]</code>, where the hash is usually a
        random string of letters and numbers. But there's a way to set the hash
        yourself, as long as it's alphanumeric and either 10 or 20 characters long.
        The method is kept somewhat secret to avoid exhausting all the "good" hashes,
        and it's a relatively inconvenient process, but I've managed to nab myself
        the "tetrisgame" hash. So <a href="https://desmos.com/calculator/tetrisgame">https://desmos.com/calculator/tetrisgame</a> now leads to my tetris game (version 2).</p> <p>Links:</p> <!> <!></section>`);function l(r){var l=c(),u=i(a(l),2),d=a(u);d.nodeValue=`These are two attempts to program Tetris in Desmos. The first of these was\r
        made as an exercise to learn  `,t(2),e(u);var f=i(u,6);s(f,{href:`https://www.desmos.com/calculator/78b054d578`,src:`/icons/desmos.ico`,target:`_blank`,children:(e,r)=>{t(),o(e,n(`Desmos Tetris, version 1`))},$$slots:{default:!0}}),s(i(f,2),{href:`https://www.desmos.com/calculator/tetrisgame`,src:`/icons/desmos.ico`,target:`_blank`,children:(e,r)=>{t(),o(e,n(`Desmos Tetris, version 2`))},$$slots:{default:!0}}),e(l),o(r,l)}export{l as component};