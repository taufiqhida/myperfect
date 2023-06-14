import React from 'react'

export default function MainContent({data, current}) {
    return<div> {data[current] && data[current].content}</div> ;
    
}
