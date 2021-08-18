import React from 'react'
import "./Definistions.css"

function Definitions({word,meanings,category,dark}) {
    return (
        <>
        {
            meanings[0] && word && category==="en"&& 
            <audio src={meanings[0].phonetics[0]?.audio} controls style={{background:"#FFF",borderRadius:10,margin:"0 0 20px"}}>
            your browser doesnt support audio element
            </audio>
                }
        <div className="meanings">
            
            {word===""?<span className="subTitle">start by typing a word in search</span>:
            meanings.map(data=>data.meanings.map(item=>(item.definitions.map((def)=>(
            <div className="singleMean" style={{background:dark?"#FFF":"#696969",color:dark?"#000":"#fff"}}>
                Definition : {def.definition}
                {def.example &&(<span>Example : {def.example}</span>)}
                {def.synonyms.length>0 &&(<span>Synonyms : {def.synonyms.map(syn=>(`${syn}, `))}</span>)}

                </div>)
            ))))}
        </div></>
    )
}

export default Definitions
