import { useState, useEffect } from 'react'

function Content() {

    const arr = ['posts','albums','comments']

    const [posts,setPosts] = useState([])
    const [type,setType] = useState('posts')

    // const handleButtonClick = (e) => {
    //     setItem(e.target.textContent)
    //     console.log(item);
    // }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    },[type])

    return (
        <div style={{paddingTop:10}}>
            {arr.map( i => (
                <button 
                    key={i}
                    style={type === i ? {
                        color:'#fff',
                        backgroundColor:'#333',
                    } : {}}
                    onClick={()=>{setType(i)}}
                >
                    {i}
                </button>
            ))}
            <ul>
            {posts.map(post => (
               <li key={post.title}>
                   {post.title || post.name}
               </li>
            ))}
            </ul>
        </div>
    )
}

export default Content