import React from 'react'
import Child from './Child';
function Parent () 
{
    let bw = [
        {
            "Title": "DDLJ"
        },
        {
            "Title": "Dabaang"
        },
        {
            "Title": "PK"
        }
    ];
    let tw = [
        {
            "Title": "Indra"
        },
        {
            "Title": "KGF"
        }, {
            "Title": "Vikram"
        }
    ];
    let c = 25;
    function incr ()
    {
        c++;
        console.log(c);
    }
    return (

        <div>
            <button onClick={incr}>Increment</button>
            <h1>BollyWood</h1>
            <Child movies={bw} count={c} />
            <h1>TollyWood</h1>
            <Child movies={tw} count={c} />
            <child>jgfjgdfj dsjfgdsj</child>
        </div>
    )
}
export default Parent
