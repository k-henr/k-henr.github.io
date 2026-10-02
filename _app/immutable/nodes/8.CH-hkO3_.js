import{A as e,H as t,M as n,U as r,_ as i,g as a,m as o}from"../chunks/xifKf3q5.js";import"../chunks/xihTtKlq.js";import"../chunks/Ds5XlEot.js";import{t as s}from"../chunks/DfZDl3q8.js";import{t as c}from"../chunks/DIkpAhqN.js";var l=a(`<section><h1>Resource Calculator</h1> <p>This is a program intended to help calculate resource flow in various games.
        You can add converters, which then add and remove resources. You can then
        play around with different amounts or different settings for the converters
        and try to find a combination that's resource positive where it's important.
        All the internals of the program use rational numbers, since floating point
        arithmetic played very badly with some of the fractions in the data. In
        total, it took about 5 months of on-and-off work<!> to finish, about 4 of those were dedicated to data entry and related program
        changes.</p> <p>It's made to work well with multiple different datasets. To test this I
        entered data for both Mindustry and Oxygen Not Included. Mindustry was the
        easier of the two, I didn't need settings, <code>OR</code> nodes or anything like
        that, whereas ONI required fairly complicated maths, loads of different types
        of settings, converter templates, formatted display names, nested choices, converters
        which ate other converters and all sorts of other things. But it was quite fun
        to expand on previous systems, rewrite large parts of my code to be more stable
        and expandable, and generally working within a preexisting codebase.</p> <p>Links:</p> <!> <!> <!></section>`);function u(a){var u=l(),d=n(e(u),2);c(n(e(d)),{children:(e,n)=>{t(),o(e,i(`The first commit was at the start of May 2026, but I worked on it a bit\r
            before making a repo as well. I didn't do that much during the summer, so\r
            I guess maybe 3 months of constant work is a good estimate.`))},$$slots:{default:!0}}),t(),r(d);var f=n(d,6);s(f,{src:`/icons/resourcecalc.svg`,href:`https://resourcecalc.khenr.se/oxygennotincluded`,target:`_blank`,children:(e,n)=>{t(),o(e,i(`Resource calculator - Oxygen Not Included`))},$$slots:{default:!0}});var p=n(f,2);s(p,{src:`/icons/resourcecalc.svg`,href:`https://resourcecalc.khenr.se/mindustry`,target:`_blank`,children:(e,n)=>{t(),o(e,i(`Resource calculator - Mindustry`))},$$slots:{default:!0}}),s(n(p,2),{href:`https://github.com/k-henr/resource-calc`,src:`/icons/github.svg`,target:`_blank`,children:(e,n)=>{t(),o(e,i(`Github repository`))},$$slots:{default:!0}}),r(u),o(a,u)}export{u as component};